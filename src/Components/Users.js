import {Link} from 'react-router-dom'
const Users=({users})=>{
    return(
        <div>
            {
                users.map(user=> <Link to={`/ProfileYaa/${user.id}`}><h2>{user.name}</h2></Link>)
            }
        </div>
    )
}

export default Users