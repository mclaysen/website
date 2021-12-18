import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { ResumeMainProps, Role } from './ResumeProps';

const ProfessionalExperience = ({role} : {role: Role}) => {

  return (<Box sx={{
    display: "flex"
  }}>
  <Box><h1>{role.company}</h1></Box>
  <Box><h1>{role.location.city}</h1></Box>
  </Box>) 
};

export default ProfessionalExperience;