import React from 'react'
import {Typography} from "@material-ui/core"
import "./profile.css"
import CustomTimeline,{CustomTimeLineSeparator}from "../timeline/CustomTimeLine"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ResumeData from "../../utils/resumeDetails"
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import CustomButton from '../button/CustomButton'
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimeLineItem = ({title,text,link}) =>(
    <TimelineItem>
     <CustomTimeLineSeparator/>
     <TimelineContent className="timeline_timeline_content">
         {/* <span>{title}</span> */}
         {link ? (<Typography className="timelineItem_text"><span>{title}:</span>
     <a href={link} target='_blank'>{text}</a></Typography>) :
      (<Typography className="timelineItem_text"><span>{title}:</span> {text}</Typography>) }
         </TimelineContent>
     
  </TimelineItem>
);

const Profile = () => {
    return(
        <div className="profile container-shadow">
            <div className="profile-heading">
               <Typography className="heading">{ResumeData.name}</Typography>
               <Typography className="title">{ResumeData.title}</Typography>
            </div>
            <figure className="profile-image">
                <img src="proff.jpg" alt="" />
                {/* <img src={display} alt=""/> */}
            </figure>
            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimeLineItem title='Name' text={ResumeData.name}/>
                    <CustomTimeLineItem title='Title'text={ResumeData.title}/>
                    <CustomTimeLineItem title='Email'text={ResumeData.email}/>
                    {/* <CustomTimeLineItem title='Birth Day'text={ResumeData.birthday}/> */}
                    {Object.keys(ResumeData.socials).map(key => (
                        <CustomTimeLineItem title={key} text={ResumeData.socials[key].text} link={ResumeData.socials[key].link}/>
                    ))}
                    </CustomTimeline>
                    <div className="button_container">
                    <CustomButton text={'DownloadCv'} icon={<GetAppIcon/>}/>    
                    </div>
               
            </div>
        </div>
    )
}

export default Profile;