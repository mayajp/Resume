import React from "react"
import {Typography, Grid} from "@material-ui/core"
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
const Resume =()=>{
    return(
        <>
        {/* about me */}
        <Grid container className="section pb_45">
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
        <Grid Item className="section__title mb_30">
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
        <Grid className="section"></Grid>
         {/* Skills */}
         <Grid className="sectionsection"></Grid>
          {/* contact */}
        <Grid className="section"></Grid>
           
        </>
    )
}

export default Resume;