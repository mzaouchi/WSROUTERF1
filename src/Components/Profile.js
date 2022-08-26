import {useParams, useNavigate} from 'react-router-dom'
const Profile=({users})=>{
    const {id} = useParams()
    const found = users.find(el=> el.id === Number(id))
    const navigate = useNavigate()
    return(
        <div>
            <h2>My name is {found.name}</h2>
            <h3>My age is {found.age}</h3>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default Profile