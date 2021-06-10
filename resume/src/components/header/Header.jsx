import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Form,FormControl,Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'
import {Link,NavLink,withRouter} from 'react-router-dom'
import{ HomeRounded,SchoolRounded,WorkRounded,Facebook,Twitter,LinkedIn,GitHub,Telegram} from '@material-ui/icons'
import ResumeData from "../../utils/reumeDetails"
import CustomButton from "../button/CustomButton"
import './Header.css'

const Header = (props) =>{
    const pathName = props?.location?.pathName
    return(
<Navbar expand="lg" sticky='top' className="header">
    {/* Home Link */}
 <Nav.Link as={NavLink} to='/' className="header_NanLink">
     <Navbar.Brand className="header_home">
         <HomeRounded/>
     </Navbar.Brand>
 </Nav.Link>
 <Navbar.Toggle/>
 <Navbar.Collapse>
     <Nav className="header_left">
         {/* Resume Link */}
         <Nav.Link as={NavLink} to='/' className={pathName == '/' ? 'header_link_active':'header_link'}>Resume</Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active':'header_link'}>Portfolio</Nav.Link>
     </Nav>
     <div className="header_rite">
         {Object.keys(ResumeData.socials).map(key =>(
             <a href={ResumeData.socials[key].link} target="_blank">{ResumeData.socials[key].icon}</a>
         ))}
         <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
     </div>
 </Navbar.Collapse>

</Navbar>
    )
}

export default withRouter(Header);