import { FC } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom'

import './App.css';

import {
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
import {store} from "./storage/store.ts";

const App : FC = () => {

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;