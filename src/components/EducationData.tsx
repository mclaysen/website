import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Education } from './ResumeProps';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { GetDateInformation } from '../utils/GetDateInformation';

const EducationData = ({educationInfo, index} : {educationInfo: Education, index: number}) => {

  educationInfo.dateObtained = new Date(educationInfo.dateObtained);

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