import React, { useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Footer from '../Footer/Footer'
import Scroll from '../Scroll/Scroll'

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Navbar></Navbar>
            <Scroll></Scroll>
            <AnimatePresence mode="wait">
                <Outlet key={pathname}></Outlet>
            </AnimatePresence>
            <Footer></Footer>

        </>
    )
}
