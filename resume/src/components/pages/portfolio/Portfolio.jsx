import React, { useState } from "react"
import {Grid,Tabs,Tab,Typography,Card, 
CardActionArea, CardMedia, CardContent,
Grow, Dialog,DialogTitle, DialogContent, DialogActions} from "@material-ui/core"
import './portfolio.css'
import ResumeData from "../../../utils/resumeDetails.jsx"

const Portfolio = () =>{
    const [tabvalue, setTabvalue] = useState('All');
    const [projectDialog,setProjectDialog] = useState(false);


    return(
       
       <Grid container spacing={1} classname="section pt_45 pb_45 ">
           {/* Title */}
             <Grid Item className="section__title mb_20 ">
              <span></span>
              <h6 className="section_title__text">Portfolio</h6>
          </Grid>
          {/* Tabs */}
          <Grid item xs={12} >
          <Tabs 
          value={tabvalue} 
          indicatorColor="White" 
          className="custom__tabs" 
          onChange={(event,newValue)=>setTabvalue(newValue)}>
              <Tab 
               label="All"
               value="All"
               className={tabvalue == 'All'? 'customtab__item active':'customtab__item'}/>
              {[...new Set(ResumeData.projects.map(item=>item.tag))].map(tag =>(
              <Tab 
               label={tag}
               value={tag} 
               className={tabvalue == tag ? 'customtab__item active':'customtab__item'} />)) }
          </Tabs>
          </Grid>
              {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={2} >
                     {ResumeData.projects.map((project)=>(
                        <>
                         {tabvalue == project.tag || tabvalue == 'All' ? 
                         (
                            <Grid item xs={12} sm={6} md={4} lg={3} className="mb_30">
                            <Grow in timeout={1000}>
                             <Card className="customCard" 
                             onClick={()=>setProjectDialog(project)}> 
                                 <CardActionArea>
                                     <CardMedia className="customCard__image" 
                                     image={project.image} title={project.title}/>
                                     <CardContent>
                                         <Typography variant={"body2"} 
                                         className="customCard__title">{project.title}</Typography>
                                         <Typography variant="caption" 
                                         className="customCard__caption">{project.caption}</Typography>
                                     </CardContent>
                                 </CardActionArea>
                             </Card>
                            </Grow>
                         </Grid>
                         ):null}   
                        </>        
                     ))}
                </Grid>
            </Grid>

            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className="projectDialog" fullWidth>
            <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
            <img src={projectDialog.image} alt="" className="projectDialog__image"/>
            <DialogContent>
               <Typography className="projectDialog__description">{projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className="projectDialog__actions">
                {projectDialog?.links?.map((link)=>(
                    <a href={link.link} target="_blank" className="projectDialog__icon">
                        {link.icon}
                    </a>
                ))}
            </DialogActions>
         </Dialog>
       </Grid>
    )
}

export default Portfolio;