import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
    name:'Maya Jayaprakash',
    title:'Front-End Developer',
    birthday:'16 December 1981',
    job:'Freelancer',
    email:'mayajayaprakash@gmail.com',
    address:'4205 Privacy Hedge',
    phone:'408 6699 509',
    socials: {
      Facebook:{
       link:'https://www.facebook.com',
       text:'Myfacebook',
       icon: <FacebookIcon/>,
    },
       Twitter:{
        link:'https://www.facebook.com',
        text:'MyTwitter',
        icon: <TwitterIcon/>,
     },
     LinkedIn:{
        link:'https://www.facebook.com',
        text:'MyLinkedIn',
        icon: <LinkedInIcon/>,
     },
     Github:{
        link:'https://www.facebook.com',
        text:'MyGitHub',
        icon: <GitHubIcon/>,
     }

  },
  about:'I’m usually a chilled and relaxed person, usually; trying to find the solution to a problem than blaming a person who did that unknowingly; I have multi-talents and still keep learning new things!. \n \n I trust myself and always be honest; I love helping others and sharing knowledge; I strongly believe knowledge is the most beautiful thing in the world! I',

  Experiences:[
      {
         title : " Release Manager (RM)",                                                            
         date : "March 2021 to till date",
         description: "Smart Release Manager is a tool which help a team to organize the software release without much manual intervension. The tool will help you to onboard a project into the RM dashboard and configure it with many agile tools and pull data related to the release. The team can create a release version or a tag and generate the release notes or a report from this tool. The tool has workflow implemented with user roles which help with the a fool proof approval process for the release."
      },

      {
         title : "Pranama Care (PC) ",
         date : "November 2019 – May 2020",
         description: "Pranama Care is a startup project, it is a health-care related business. Caring Your Aging Parents Is not easy in Today’s Busy Schedule of life, that too in the other side of the globe. The distance, time, availability and the expenses are the hurdles that stay in between your love to your parents and discharging your responsibilities of the care and attention you would love to give them. On their health and treatment side we offer total solution. We take care of them from home to hospital to home, hospital stay, and after discharge services, the way you would do, if you are physically present. You will get daily reports which includes videos, photos, feedback’s etc"
      },
  ],
  Educations:[
     {
        title:" Master of Information Technology (MSc)",
        university:"Bharathiyar University",
        District:"Tamil Nadu",
        State:"India"
     },
     {
      title:"B.sc Mathematics",
      university:"Calicut University",
      District:"Kerala",
      State:"India"
     }
  ]
}