import React ,{useState}from "react";

import {
    Box,
    Avatar,
    Container,
    Grid,
    Typography,
    MenuList,
    MenuItem,Paper,

} from "@mui/material";
import Accordion from '@mui/material/Accordion';
//import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
//import { makeStyles } from "@material-ui/core/styles";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './profile.css';
const Profile = ({id,
    Name,
    profileavtar,
    description,
    ownername,
    noofissue,
    updatedate,
    totalchanges,
    contributors_url,
    statuses_url,
    stargazers_count,
    open_issues_count
}) => {
    const [expanded, setExpanded] = useState(false);
    const [expandedadition, setExpandedadition] = useState(false);
    const [expandedcommits, setExpandedcommits] = useState(false);
    const [expandeddelation, setExpandeddelation] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChange2=(panel)=>(event,isExpanded)=>{
        setExpandedadition(isExpanded ? panel : false);
    }
    const handleChange1=(panel)=>(event,isExpanded)=>{
        setExpandedcommits(isExpanded ? panel : false);
    }
    const handleChange3=(panel)=>(event,isExpanded)=>{
        setExpandeddelation(isExpanded ? panel : false);
    }

    return (
        <Container>
            <Grid container className="" spacing={4}>
                    <Grid item xs={12} sm={12} md={12} className="" lg={12}>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ backgroundColor:'whitesmoke'}} >
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon style={{ fontSize: '20px' }} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"

                        >
                            <Box className="repo-main-container">
                                <Avatar alt={Name} variant="square" sx={{ height: '100px', width: '100px' }} src={ profileavtar.avatar_url} />

                                <Box className="repo-content-container">
                                   <Typography variant="h5">
                                    {Name}
                                   </Typography>
                                   <Typography variant="h6">
                                    {description}
                                   </Typography>
                                   <Box className="repo-start-value-container">
                                   <p className="repo-star-value" variant="h6">★ <span>{stargazers_count}</span></p>
                                   <p className="repo-star-value"  variant="h6">Issues <span>{open_issues_count}</span></p>
                                   <p className="repo-star-value"  variant="h6">Last pushed {updatedate} by {ownername}</p>
                                   </Box>
                                </Box>
                            </Box>
                          

                        </AccordionSummary>
                        <AccordionDetails>

                        
                           <Box className="menu-container">
                          
                           <Grid item xs={12} sm={12} md={12} className="" lg={12}>
                           <Paper>

        <MenuList>
          <MenuItem>
    
          <Accordion expanded={expandedcommits === 'panel1'} onChange={handleChange1('panel1')} style={{ backgroundColor:'whitesmoke'}} >
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon style={{ fontSize: '10px' }} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header" >

                            commits
                        </AccordionSummary>
                        <AccordionDetails>
                            <Avatar alt="commitgraph" src="https://api.github.com/repos/octocat/hello-world/stats/code_frequency" />
                            <Avatar alt="commitgraph" src="" />
                        </AccordionDetails>
          </Accordion>
          </MenuItem>
          <MenuItem>
          <Accordion expanded={expandedadition === 'panel2'} onChange={handleChange2('panel2')} style={{ backgroundColor:'whitesmoke'}} >
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon style={{ fontSize: '10px' }} />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"     >
                             Addition
            </AccordionSummary>
            <AccordionDetails>
                <Avatar   className="" alt="contributor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoDG48v8-AiUuiWuXTPAubaDpKQHamhvkkQ&usqp=CAU"/>
            </AccordionDetails>
             </Accordion>
             </MenuItem>
              <MenuItem>
          <Accordion expanded={expandeddelation === 'panel3'} onChange={handleChange3('panel3')} style={{ backgroundColor:'whitesmoke'}} >
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon style={{ fontSize: '10px' }} />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header">
                               Deletation  
                                    </AccordionSummary></Accordion>
                                 </MenuItem>
                          </MenuList>
                         </Paper>
                        
                         </Grid>
                           </Box>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Profile;