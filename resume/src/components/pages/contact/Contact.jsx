import React from 'react';
import {Grid, TextField, Typography} from "@material-ui/core"
import CustomButton from '../../button/CustomButton'
import ResumeData from '../../../utils/resumeDetails.jsx'
import './Contact.css'

function Contact(props) {
    return (
        <>
        <Grid container  spacing={5} className="section padding_50 mb_30" >
            {/* contact Form */}
         
               <Grid Item  xs={12} lg={7}> 
                 <Grid container>
                    
                    <Grid Item className="section__title mb_30">
                         <span></span>
                         <h6 className="section_title__text">Contact Form</h6>
                     </Grid>
                    <Grid item xs={12} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name="name" label="Name"></TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name="email" label="Email"></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth name="message" label="Message" multiline rows={4}></TextField>
                            </Grid>
                            <Grid item xs={12}><CustomButton text="Submit"/></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
           
                 {/* contact information */}
               <Grid Item className="" xs={12} lg={5} >
                  <Grid container  className="container__spacing" >
                     <Grid Item className="section__title mb_30">
                         <span></span>
                         <h6 className="section_title__text ">Contact Information</h6>
                     </Grid>
                     <Grid item xs={12} spacing={1}>
                         <Grid container  className="display__Contact ">
                             <Grid item xs={12}  >
                                 <Typography className="contactInfo__items">
                                     <span>Address:</span>{ResumeData.address}
                                 </Typography>
                                 <Typography className="contactInfo__items">
                                     <span>Phone:</span>{ResumeData.phone}
                                 </Typography>
                                 <Typography className="contactInfo__items">
                                     <span>Email:</span>{ResumeData.email}
                                 </Typography>
                                 </Grid>
                                 </Grid>
                              <Grid item xs={12}>
                                 <Grid container clasName="contactinfo__socialsContainer">
                                     {Object.keys(ResumeData.socials).map((key) =>(
                                         <Grid item className="contactinfo_socials">
                                             <a href={ResumeData.socials[key].link}>
                                                 {ResumeData.socials[key].icon}
                                             </a>
                                         </Grid>
                                     ))}   
                                 </Grid> 
                             </Grid>              
                         </Grid>
                      </Grid>
                 </Grid>              
        </Grid>
        </>
    );
}

export default Contact;