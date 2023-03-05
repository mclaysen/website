import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ResumeMainProps, Education } from './ResumeProps';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { start } from 'repl';
import { GetDateInformation } from '../utils/GetDateInformation';

const EducationData = ({educationInfo, index} : {educationInfo: Education, index: number}) => {

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={1}>
          {index===0 ? <Box sx={{fontWeight: 'bold'}}>Education</Box> : <Box></Box>}
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{fontWeight: 'bold'}}>{educationInfo.school}</Typography>&nbsp;
                <Typography>{educationInfo.location.city}</Typography>,&nbsp;
                <Typography>{educationInfo.location.state}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography>{educationInfo.degree}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{textAlign: 'right'}}>{GetDateInformation(educationInfo.dateObtained)}</Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  </Box>
  )
};

export default EducationData;