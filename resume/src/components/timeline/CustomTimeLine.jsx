import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import "./CustomTimeLine.css"
import { Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const CustomTimeLine = ({title,children,icon}) => {
    return(
        <Timeline className="timeLine">
        {/* Header */}
      <TimelineItem className="timeline_FirstItem">
        <TimelineSeparator>
          <TimelineDot className="timeLine_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className='timeLine_header'>{title}</Typography></TimelineContent>
      </TimelineItem>
      {children}
        {/* Remaining Items */}
      {/* <TimelineItem> */}
        {/* <CustomTimeLineSeparator/> */}
        {/* <TimelineContent>Code</TimelineContent> */}
      {/* </TimelineItem> */}
      
    </Timeline>
        
    )
}

export const CustomTimeLineSeparator = () =>{
    return(
        
        <TimelineSeparator className='seperator_padding'>
        <TimelineDot variant='outlined' className="timeLine_dot"/>
        <TimelineConnector />
      </TimelineSeparator>
        
    )
}

export default CustomTimeLine;