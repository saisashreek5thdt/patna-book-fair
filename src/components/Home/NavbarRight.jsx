import { Link } from "react-router-dom";
// const language = 'assets/images/language_icon.svg'
// import { LiaLanguageSolid } from "react-icons/lia";
const NavbarRight = () => {
    return (
        <>
            <div className="navbar-collapse collapse clearfix " id="navbarSupportedContent">
                <ul className="navigation clearfix">
                    
                    <li ><Link to="">About</Link>
                        
                    </li>
                    <li ><Link to="">Schedule</Link>
                        
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
                    {/* <img src={language} alt="" /> */}
                    <span>
                    <i className="fa fa-language fa-2xl" style={{width:"30px",height:"30px", color:"gold"}}></i>
                    {/* <LiaLanguageSolid style={{width:"30px",height:"30px", color:"white"}}/> */}
                     </span>
                          <ul>
                            <li><a href="">English</a></li>
                            <li><a href="">Hindi</a></li>
                            <li><a href="">Marathi</a></li>
                          </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavbarRight;