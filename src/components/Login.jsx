
import { useState } from 'react';
import { login } from '../components/service/data-service';
import { useNavigate } from 'react-router-dom';

function Login ({ setToken , onLoginComplete}) {
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    function handleSubmit (event) {
        event.preventDefault();
        const { username, password } = event.target.elements;

        console.log(username.value, password.value);

        login(username.value, password.value)
            .then(response => response.data)
            .then(data => {
                console.log('paso por el login');
                
                
                localStorage.setItem('token', data.token)
             
                console.log(data.token);
                onLoginComplete(true);
                navigate('/'); // redirect to the home page
            
               
                setToken(data.token);

            }).catch((err) => {
                setError(err.response.data.message);
                console.log(err);
                onLoginComplete(false);
                
            })
    }

 


 return (
    <div className="login">
        {error && <div className="alert alert-danger m-3">{error}</div>}
        <div className='container my-5'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input 
                type="text" 
                name='username' 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password" 
                name='password'
                className="form-control" 
                id="exampleInputPassword1" 
                />
                <div id ="passwordHelp" className="form-text">Please use uppercase, simbols and number caracters</div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-success">Login</button>
        </form>
        </div>
    </div>

 )
}

export default Login;

