import { FC } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import {
    PrivateRoute,
    Navbar,
    Footer
} from './components'
import {
    HomePage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    DashboardPage
} from './components/Pages';
import {store} from "./storage/store.ts";
import DonateTab from "./components/Pages/ProfilePage/Tabs/DonateTab/DonateTab.tsx";
import AboutTab from "./components/Pages/ProfilePage/Tabs/AboutTab/AboutTab.tsx";
import './App.css';

const App : FC = () => {

    return (
        <Provider store={store}>
            <Navbar />

            <Routes>
                {/* Public routes */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/:username" element={<ProfilePage/>}>
                    <Route path="about" element={<AboutTab/>}/>
                    <Route path="" element={<DonateTab/>}/>
                </Route>

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