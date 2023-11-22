import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../page/Home';
import { GenerateReport } from '../page/GenerateReport';
import { UserManagement } from '../page/UserManagement';
import { GlMapping } from '../page/GlMapping';
import { Adjustments } from '../page/Adjustments';
import { Settings } from '../page/Settings';
import { Login } from '../page/Login';
import { CustomData } from '../page/CustomData';

function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/dashboard" element={<HomePage />}></Route>
                <Route
                    path="/generate-report"
                    element={<GenerateReport />}
                ></Route>
                <Route
                    path="/generate-report"
                    element={<GenerateReport />}
                ></Route>
                <Route
                    path="/user-management"
                    element={<UserManagement />}
                ></Route>
                <Route path="/gl-mapping" element={<GlMapping />}></Route>
                <Route path="/adjustments" element={<Adjustments />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/custom-data" element={<CustomData />}></Route>
            </Routes>
        </Router>
    );
}
export default RouterPage;
