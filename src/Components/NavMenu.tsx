import {useState} from "react";
import {BiMenuAltLeft} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import {Link} from "react-router-dom";
import {navBar} from "../Data/Nav";

const NavMenu = () => {
  //menu state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  //Navlinks
  const [links] = useState(navBar);

  const handleOnClickToggle = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <div className="menu-btn">
        <button onClick={handleOnClickToggle}>
          {showMenu ? <CgClose/> : <BiMenuAltLeft/>}
        </button>
      </div>
      <header className={`${showMenu ? "hdr show" : "hdr"}`}>
        <nav className="menu-links">
          <ul>
            {/*<li onClick={handleOnClickToggle}>*/}
            {/*  <Link to="/">Home</Link>*/}
            {/*</li>*/}
            {/*<li onClick={handleOnClickToggle}>*/}
            {/*  <Link to="/portfolio">Portfolio</Link>*/}
            {/*</li>*/}
            {/*<li onClick={handleOnClickToggle}>*/}
            {/*  <Link to="/contact">Contact</Link>*/}
            {/*</li>*/}
            {/*<li onClick={handleOnClickToggle}>*/}
            {/*  <Link to="/skills">Skills</Link>*/}
            {/*</li>*/}

            {
              links.map((link:{id:string,title:string,url:string}) => {
                const {id, url, title} = link;
                return (
                  <li key={id} onClick={handleOnClickToggle}>
                    <Link to={url}>{title}</Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavMenu;