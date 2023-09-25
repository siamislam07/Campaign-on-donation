import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 flex-col md:flex-row lg:flex-row ">
                <Logo></Logo>
                <ul className="flex gap-5 flex-col md:flex-row lg:flex-row">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <p className="text-xl font-bold">Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <p className="text-xl font-bold">Donation</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <p className="text-xl font-bold">Statistics</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;