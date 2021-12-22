import React from 'react';
// Router:
import { Routes, Route, } from 'react-router-dom';
// Components:
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';
import { HeroScreen } from '../components/hero/HeroScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container mt-5">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen  />} />
                    <Route path="dc" element={<DcScreen  />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen  />} />
                </Routes>
            </div>
        
        </>
    )
}
