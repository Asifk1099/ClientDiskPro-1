
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import DashboardComponent from "./pages/Dashboard";
import OwnerLogin from "./Components/UsersComponents/OwnerLogin";
import RegistrationForm from "./Components/UsersComponents/RegisterationFrom";
import Clients from "./pages/Clients";
import Project from "./pages/Project";
import SecureExchange from "./pages/SecureExchange";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Header />

                <div className="flex">
                    <Sidebar />

                    <main className="flex-1 min-w-0">
                        <Routes>
                            <Route path="/dashboard" element={<DashboardComponent />} />
                            <Route path="/admin/login" element={<OwnerLogin />} />
                            <Route path="/register" element={<RegistrationForm />} />
                            <Route path="/client" element={<Clients/>}/>
                            <Route path="/project" element={<Project/>}/>

                            <Route path="/secure-exchange" element={<SecureExchange/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}
