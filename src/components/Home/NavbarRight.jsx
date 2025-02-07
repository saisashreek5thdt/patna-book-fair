import { Link } from "react-router-dom";
const language = 'assets/images/language_icon.svg'
const NavbarRight = () => {
    return (
        <>
            <div className="navbar-collapse collapse clearfix " id="navbarSupportedContent">
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
                    <li className="dropdown language-icon">
                    <img src={language} alt="" />
                          <ul>
                            <li><a href="">English</a></li>
                            <li><a href="">Hindi</a></li>
                            <li><a href="">Bihari</a></li>
                          </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavbarRight;