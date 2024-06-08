import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Initial from './pages/InitialPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
//import Private from './components/private';


function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Initial />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;