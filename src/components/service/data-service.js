import axios from 'axios';





export function getPosts() {
    return axios.get('/api/posts', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,

        }
    })
}

export function login (username, password) {
    let payload = {
        "username": username,
        "password": password
    };
   
    console.log(payload)

    return axios.post('/api/login', payload,
        {
            headers: {
               
                'Content-Type': 'application/json',
               
            }
        })    
   

}



export function showUser (id) {
    return axios.get(`/api/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,

        }
    })
}


export function likePost (id, likes) {
    return axios.post(`/api/posts/${id}/like`,{"likes": likes+1 }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,


        }
    })
}

export function createPost (payload) {
    return axios.post('/api/posts', payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
}

export function createComment (payload, id) {
    return axios.post(`/api/posts/${id}/comments`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
}

export function deletePost (id) {
    return axios.delete(`/api/posts/${id}`, {

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        } } )
}   

export function deleteComment (postId, commentId) {
    return axios.delete(`/api/posts/${postId}/comments/${commentId}`, {
                
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            } } )
}

export function editPost (payload, id) {
    return axios.put(`/api/posts/${id}`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
}



    

    






/* 
// example of a post object
const posts = [
    {
        img: "https://jmperezperez.com/static/images/posts/svg-placeholders/pexels-photo-281184-square.jpg",
        user: "user 1",
        description: "Lorem Lorem dolor aliquip excepteur adipisicing proident labore sit excepteur. Qui mollit tempor consequat fugiat occaecat. Eu ut consectetur consectetur excepteur nisi ullamco deserunt. Eu anim aliquip laborum proident fugiat. Sunt pariatur do exercitation proident ex. Irure eu et do irure ex anim irure mollit minim voluptate non. Commodo sit magna do sit amet do dolore ullamco. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        likes: 43,
        comments: "15",
        createdAt: "2022-10-20"

    },
    {
        img: "https://picsum.photos/200/300",
        user: "user 2",
        description: "Duis reprehenderit do et ad pariatur. Ad labore nostrud ipsum officia aute aliquip ex duis anim voluptate nulla ipsum est exercitation. Dolor elit esse nisi incididunt reprehenderit duis ut. Eiusmod commodo deserunt veniam voluptate cillum non officia cupidatat eu Lorem id. Fugiat est eu do exercitation magna ea mollit consequat minim. Duis ipsum do ut culpa quis id cillum magna magna. excepteur aliqua aliqua irure. Aute amet nisi est veniam. Dolore elit eu sint laborum ut.",
        likes: 12,
        comments: "5",
        createdAt: "2022-10-02"


    },
    {
        img: "https://picsum.photos/200",
        user: "user 3",
        description: "Ad aliquip velit excepteur ad. Quis pariatur elit excepteur ipsum laboris veniam incididunt. Fugiat enim deserunt voluptate laboris. Eiusmod adipisicing veniam reprehenderit deserunt mollit excepteur minim fugiat ullamco officia elit.",
        likes: 200,
        comments: "10",
        createdAt: "2019-01-03"


    },
    {
        img: "https://picsum.photos/200/300",
        user: "user 4",
        description: "Qui qui occaecat dolor velit est et velit nisi incididunt occaecat qui. Velit fugiat officia aute ex ad sint cupidatat esse ex ullamco nisi fugiat. Nostrud culpa non quis ullamco. Ullamco commodo amet tempor excepteur. Velit amet deserunt irure elit consectetur ut ullamco aute ea ex Lorem. Do reprehenderit aute occaecat enim laboris voluptate. Occaecat magna dolore quis culpa laboris sit Lorem cupidatat esse ut cillum velit pariatur..",
        likes: 1,
        comments: "1",
        createdAt: "2021-12-04"
    },

    {
        img: "https://picsum.photos/200",
        user: "user 5",
        description: "Aliquip eiusmod tempor eu fugiat qui irure velit do nulla deserunt eu. Ipsum et enim laboris sit adipisicing dolore pariatur ad deserunt excepteur minim reprehenderit sit. Nulla eiusmod quis dolor fugiat sit laboris veniam sunt excepteur enim.",

        likes: 43,
        comments: "15",
        createdAt: "2022-04-05"
    },
    {
        img: "https://picsum.photos/200/300",
        user: "user 6",
        description: "Adipisicing ut magna velit voluptate ut ea eu voluptate. Laborum enim incididunt veniam duis enim. Quis occaecat in ad sit sint ad exercitation ut commodo dolor consectetur nostrud quis eu.",
        likes: 12,
        comments: "5",
        createdAt: "2022-10-06"

    }
];

export function getPosts() {

    return new Promise((resolve, reject) => {
        getData().then((response) => {
            console.log(response.data)
           
        }).catch((error) => {
            console.log(error)
            
        })

        setTimeout(() => {
            resolve([...posts]);
        }, 3000);
    }
    );

} */



