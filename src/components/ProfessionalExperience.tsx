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
import { useMediaQuery } from '@mui/material';
import { DateInfo, Title } from './Resume.styles';

const ProfessionalExperience = ({role, index} : {role: Role, index: Number}) => {
  role.startDate = new Date(role.startDate);
  if(role.endDate !== undefined)
  {
    role.endDate = new Date(role.endDate);
  }

  const dateContent = GetDateInformation(role.startDate, role.endDate, role.currentRole);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} md={2}>
          {index===0 && <Title theme={theme}>Experience</Title>}
        </Grid>
        {isSmallScreen && <Grid item xs={1}></Grid>}
        <Grid item xs={11} md={8}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{fontWeight: 'bold'}}>{role.company}</Typography>&nbsp;
                <Typography>{role.location.city}</Typography>,&nbsp;
                <Typography>{role.location.state}</Typography>
                {isSmallScreen && <DateInfo>&nbsp;{dateContent}</DateInfo>}
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
                    return <ListItem key={index} disablePadding><ListItemText inset primary = {value}></ListItemText></ListItem>
                })}
              </List>
            </Grid>
          </Grid>
        </Grid>
        {!isSmallScreen && <Grid item xs={2} sx={{textAlign: 'right'}}>
          <DateInfo>{dateContent}</DateInfo>
        </Grid>}
      </Grid>
    </ThemeProvider>
  </Box>) 
};

export default ProfessionalExperience;