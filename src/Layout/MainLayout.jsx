import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header&Navbar/NavBar";
import Banner from "../Components/Header&Navbar/Banner";

const MainLayout = () => {
    return (
        <div >
            <div className=" max-w-[1500px] mx-auto">
                
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;