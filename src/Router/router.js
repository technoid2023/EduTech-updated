import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Register from '../pages/Registration';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Reset from '../pages/ResetPassword';

function MyRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/reset-password" element={<Reset/>}/>
        </Routes>

    )
}
export default MyRoute;