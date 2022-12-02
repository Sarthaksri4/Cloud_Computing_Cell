import React from 'react'
import {NavLink} from 'react-router-dom';
import web from '../Navbar/8.png'
import "./Nav.css";
const Navbar = () =>
{
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    return (
      <>
     <div className={click ? "main-container3" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-containerb">
          <NavLink exact to="/" className="nav-logob">
          <img src={web} alt="" /> Cloud Computing Cell
          </NavLink>
          <ul className={click ? "nav-menub active5" : "nav-menub"}>
            <li className="nav-itemb">
              <NavLink
                exact
                to="/"
                activeClassName="active5"
                className="nav-linksb"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                exact
                to="/activities"
                activeClassName="active5"
                className="nav-linksb"
                onClick={click ? handleClick : null}
              >
                Activities
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                exact
                to="/team"
                activeClassName="active5"
                className="nav-linksb"
                onClick={click ? handleClick : null}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                exact
                to="/Call"
                activeClassName="active5"
                className="nav-linksb"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-itemb">
              <NavLink
                exact
                to="/Register"
                activeClassName="active5"
                className="nav-linksb"
               onClick={click ? handleClick : null}
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div className="nav-iconb" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    
    </>
    )
}

export default Navbar;