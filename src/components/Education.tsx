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
import { start } from 'repl';

const GetYearInformation = (startDate: Date, endDate: Date | undefined, currentRole: Boolean) => {
  
  let endText = "";

  let startDateValue = new Date(startDate);
  if(currentRole || endDate === undefined)
  {
    endText = "present";
  }
  else
  {
    let endDateValue = new Date(endDate)
    endText = endDateValue.getMonth() + "/"+endDateValue.getFullYear();
  }
  return startDateValue.getMonth()+"/"+startDateValue.getFullYear() + " - " + endText;
}

const ProfessionalExperience = ({role, index} : {role: Role, index: Number}) => {

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={1}>
          {index==0 ? <Box sx={{fontWeight: 'bold'}}>Experience</Box> : <Box></Box>}
        </Grid>
        <Grid item xs={9}>
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
        </Grid>
        <Grid item xs={2}>
          <Box sx={{textAlign: 'right'}}>{GetYearInformation(role.startDate, role.endDate, role.currentRole)}</Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  </Box>) 
};

export default ProfessionalExperience;