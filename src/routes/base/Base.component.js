import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Base() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}