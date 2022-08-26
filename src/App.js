import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavUser from './Components/NavUser';
import Users from './Components/Users';
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Profile from './Components/Profile';

function App() {
  const [users,setUsers] = useState([
    {name : 'Yaakoub',age :2, id : Math.random()},
    {name : 'Amir',age :3, id : Math.random()},
    {name : 'Amine',age :4, id : Math.random()},
    {name : 'Ghazi',age :5, id : Math.random()}
  ])
  return (
    
    <div>
      <NavUser/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/UsersList' element={<Users users={users}/>}/>
        <Route path='/ContactPage' element={<Contact/>}/>
        <Route path='/ProfileYaa/:id' element={<Profile users={users}/>}/>
      </Routes>
    </div>
  );
}

export default App;
