import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ResumeMainProps, Role } from './ResumeProps';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {theme} from '../theme/typeography';



const ProfessionalExperience = ({role} : {role: Role}) => {

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box>
            <Typography sx={{fontWeight: 'bold'}}>{role.company}</Typography>&nbsp;
            <Typography>{role.location.city}</Typography>,&nbsp;
            <Typography>{role.location.state}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography sx={{fontStyle: 'italic'}}>{role.title}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography>{role.summary}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <List>
          {role.highlights?.map((value, index)=>{
                return <ListItem disablePadding><ListItemText inset primary = {value}></ListItemText></ListItem>
            })}
          </List>
        </Grid>
      </Grid>


    </ThemeProvider>
  </Box>) 
};

export default ProfessionalExperience;