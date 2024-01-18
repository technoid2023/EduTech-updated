import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Reset from '../pages/ResetPassword';
import Update from '../pages/UserUpdate';


function MyRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>            
            <Route path='/register' element={<Registration/>}/>			
            <Route path='/login' element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/reset-password" element={<Reset/>}/>
            <Route path="/user-update" element={<Update/>}/>
        </Routes>
    )
}
export default MyRoute;