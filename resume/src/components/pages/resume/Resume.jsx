import React from "react"
import {Typography, Grid,Icon, Paper} from "@material-ui/core"
import './Resume.css'
import ResumeData from "../../../utils/resumeDetails";
import CustomTimeline,{CustomTimeLineSeparator}from "./../../timeline/CustomTimeLine"
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from "@material-ui/lab/TimelineContent"
import SchoolIcon from '@material-ui/icons/School';
import TimelineDot from "@material-ui/lab/TimelineDot";
const Resume =()=>{
    return(
        <>
        {/* about me */}
        <Grid container className="section pb_45 padding_50">
          <Grid Item className="section__title mb_30">
              <span></span>
              <h6 className="section_title__text">About Me</h6>
          </Grid>
          <Grid Item className="" xs={12}>
               <Typography variant="body2" className="aboutme__text">{ResumeData.about}</Typography>
          </Grid>
          
        </Grid>
        {/* Educations and experiences */}
        <Grid className="section">
        <Grid Item className="section__title mb_30 ">
              <span></span>
              <h6 className="section_title__text">Resume</h6>
          </Grid>
          <Grid item xs={12}>
              <Grid container className="resume__timeLine">
                  {/* Experience*/}
                  <Grid item xm={12} md={6}><CustomTimeline title="Work Experience" icon={<WorkIcon/>}>
                      {ResumeData.Experiences.map(experience => (
                          <TimelineItem>
                             <CustomTimeLineSeparator/>
                              <TimelineContent className="timeLine__content">
                                  <Typography variant="h6" className="timeLine__title">{experience.title}</Typography>
                                  <Typography variant="caption" className="timeLine__date">{experience.date}</Typography>
                                  <Typography  variant="body2" className="timeLine_description">{experience.description}</Typography>
                              </TimelineContent>
                          </TimelineItem>
                      ))}
                      </CustomTimeline></Grid>
                  {/* Education */}
                  <Grid item xm={12} md={6}><CustomTimeline title="Education" icon={<SchoolIcon/>}>
                      {ResumeData.Educations.map(education => (
                          <TimelineItem>
                             <CustomTimeLineSeparator/>
                              <TimelineContent className="timeLine__content">
                                  <Typography variant="h6" className="timeLine__title">{education.title}</Typography>
                                  <Typography variant="caption" className="timeLine__date">{education.university}</Typography>
                                  <Typography  variant="body2" className="timeLine_description">{education.District}</Typography>
                                  <Typography  variant="body2" className="timeLine_description">{education.State}</Typography>
                              </TimelineContent>
                          </TimelineItem>
                      ))}
                      </CustomTimeline></Grid>
              </Grid>

          </Grid>
        </Grid>
        {/* service */}
        <Grid container className="section pb_45">
           <Grid Item className="section__title ">
              <span></span>
              <h6 className="section_title__text">Knowledge In</h6>
           </Grid>
              <Grid item xs={12}>
                  <Grid container  >
                      {ResumeData.Services.map(technologies =>(
                          <Grid item xs={12} sm={6} md={0} className="padding_50" >
                              <Paper className="services" >
                                  <Icon className="Service__Icon">{technologies.icons}</Icon>
                                  <Typography className="service_tile" variant="h6">{technologies.title}</Typography>
                                  <Typography className="service_core" variant="body2">{technologies.core1}</Typography>
                                  <Typography className="service_core" variant="body2">{technologies.core2}</Typography>
                                  <Typography className="service_core" variant="body2">{technologies.core3}</Typography>
                                  <Typography className="service_core" variant="body2">{technologies.core4}</Typography>
                                  <Typography className="service_core" variant="body2">{technologies.core5}</Typography>
                              </Paper>
                          </Grid>
                      ))}
                      
                         {ResumeData.knowledges.map(knowledge =>(
                          <Grid item xs={12} sm={6} md={0} className=" padding_50">
                              <Paper className="services" >
                                  <Icon className="Service__Icon">{knowledge.icons}</Icon>
                                  <Typography className="service_tile" variant="h6">{knowledge.title}</Typography>
                                  <Typography className="service_core" variant="body2">{knowledge.area1}</Typography>
                                  <Typography className="service_core" variant="body2">{knowledge.area2}</Typography>
                                  <Typography className="service_core" variant="body2">{knowledge.area3}</Typography>
                                  <Typography className="service_core" variant="body2">{knowledge.area4}</Typography>
                                  <Typography className="service_core" variant="body2">{knowledge.area5}</Typography>
                              </Paper>
                          </Grid>
                      ))} 
                         
             </Grid>
          </Grid>
             

        </Grid>

        <Grid container className="section pb_45">
            <Grid item xs={12}>
            <Grid container spacing={3} justify="space-between" className="section padding_50">
            {ResumeData.skills.map(skill => (
                <Grid item xs={12} sm={6} md={0} >
                    <Paper elevation={1} className="skill mb_30 ">
                        <Typography variant="h6" className="skills_title">{skill.title}</Typography>
                        {skill.description.map(skilldescription => (
                            <Typography variant = "body2" className="skill_description">
                                <TimelineDot variant="outlined" className="timeLine_dot"/>
                                  {skilldescription}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            ))}
        </Grid>

            </Grid>
        </Grid>
        


          {/* skills */}
      
           
        </>
    )
}

export default Resume;