import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography';
import { Role } from './ResumeProps';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { GetDateInformation } from '../utils/GetDateInformation'

const ProfessionalExperience = ({role, index} : {role: Role, index: Number}) => {
  role.startDate = new Date(role.startDate);
  if(role.endDate !== undefined)
  {
    role.endDate = new Date(role.endDate);
  }

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
          <Box sx={{textAlign: 'right'}}>{GetDateInformation(role.startDate, role.endDate, role.currentRole)}</Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  </Box>) 
};

export default ProfessionalExperience;