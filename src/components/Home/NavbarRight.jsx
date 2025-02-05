import { Link } from "react-router-dom";

const NavbarRight = () => {
    return (
        <>
            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                    
                    <li ><Link to="">About</Link>
                        
                    </li>
                    <li className="dropdown"><Link to="">Schedule</Link>
                        <ul>
                            <li><a href="event.html">Events</a></li>
                            <li><a href="event-detail.html">Events Detail</a></li>
                            <li><a href="register.html">Account</a></li>
                        </ul>
                    </li>
                    <li ><Link to="">Speakers</Link>
                    </li>
                    
                    <li ><Link to="">Team</Link>
                    </li>
                    <li ><Link to="">Publishers</Link>
                    </li>
                    <li ><Link to="">FAQ</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavbarRight;