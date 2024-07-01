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
import {SettingsPage} from "./components/Pages/SettingsPage/SettingsPage.tsx";
import {OverviewPage} from "./components/Pages/OverviewPage/OverviewPage.tsx";
import {StatisticsPage} from "./components/Pages/StatisticsPage/StatisticsPage.tsx";
import {ErrorPage} from "./components/Pages/ErrorPage/ErrorPage.tsx";
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
                <Route path="/u/:username" element={<ProfilePage/>}>
                    <Route path="about" element={<AboutTab/>}/>
                    <Route path="" element={<DonateTab/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>

                {/* Private route using PrivateRoute component */}
                <Route path="/" element={<PrivateRoute/>}>
                    <Route path="/dashboard" element={<DashboardPage/>}>
                        <Route path="overview" element={<OverviewPage/>}/>
                        <Route path="statistics" element={<StatisticsPage/>}/>
                        <Route path="settings" element={<SettingsPage/>}/>
                    </Route>
                </Route>
            </Routes>
            <Footer />
        </Provider>
    );
}

export default App;