import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ResumeMainProps, Role } from './ResumeProps';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {theme} from '../theme/typeography';


const ProfessionalExperience = ({role} : {role: Role}) => {

  return (<Box sx={{
    display: "flex"
  }}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box><Typography variant="h1">{role.company}</Typography></Box>
    <Box><Typography variant="h5">{role.location.city}</Typography></Box>
  </ThemeProvider>
  </Box>) 
};

export default ProfessionalExperience;