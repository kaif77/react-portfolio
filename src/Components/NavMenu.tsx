import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgClose} from "react-icons/cg";
import { Link } from "react-router-dom";

const NavMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleOnClickToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div>
            <div className="menu-btn">
                <button onClick={handleOnClickToggle}>
                    {showMenu ? <CgClose/> : <BiMenuAltLeft />} 
                </button>
            </div>
                <header className={`${showMenu ? "hdr show" : "hdr"}`}>
                    <nav className="menu-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/skills">Skills</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

        </div>
    );
}

export default NavMenu;
