import { CreatePost } from "../CreatePost";
import { Profile } from '../Profile';


export function Profiles( { onLogout, handleCreatePost, createdPostmessage, currentUser,}) {

return(<>

        <Profile onLogout={onLogout} currentUser={currentUser} />
        <CreatePost handleCreatePost={handleCreatePost} createdPostmessage={createdPostmessage} />
    </>)

}