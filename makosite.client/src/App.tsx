import { FC } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css';

import {
    AuthProvider,
    PrivateRoute,
    Navbar, Footer
} from './components'

import {
    HomePage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    DashboardPage
} from './components/Pages';

const App : FC = () => {

    return (
        <AuthProvider>
            <Navbar />

            <Routes>
                {/* Public routes */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/:username" element={<ProfilePage/>}/>

                {/* Private route using PrivateRoute component */}
                <Route path="/" element={<PrivateRoute/>}>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Route>
            </Routes>
            <Footer />
        </AuthProvider>
    );
}

export default App;