import React from 'react';
// Router:
import { Routes, Route, } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';
// Components:
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public routes without auth*/}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute> 
                    } 
                />

                {/* Private routes with auth*/}
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute> 
                    } 
                />
                
            </Routes>
        </BrowserRouter>
    )
}
