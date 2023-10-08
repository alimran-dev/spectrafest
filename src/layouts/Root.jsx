import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;