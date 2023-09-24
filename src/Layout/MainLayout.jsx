import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header&Navbar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;