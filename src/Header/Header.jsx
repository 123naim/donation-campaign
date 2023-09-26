import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 mt-7">
            <div className="w-48">
                <img src="https://i.ibb.co/WBvx9SW/Logo.png" alt="" />
            </div>
            <div className="mt-5 md:mt-0">
                <ul className="flex gap-4">
                    <li className="text-xl">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li className="text-xl">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;