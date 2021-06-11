import React from 'react'
import {Typography} from "@material-ui/core"
import ResumeData from "../../utils/resumeDetails.jsx"
import './Footer.css'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer__left">
              <Typography className="footer__name">
                  {ResumeData.name}
              </Typography>
            </div>
              <div className="footer__right">
                 <Typography className="footer_copyright">
                         @ all rights reserved <a href="https://themeforest.net/user/tavonline" target="_blank">Travonline </a>
                          <br/>
                         Designed and developed by <a href="/" target="_blank">Maya Jayaprakash</a>.
                 </Typography>
              </div>
              
        </div>
    )
}
export default Footer;