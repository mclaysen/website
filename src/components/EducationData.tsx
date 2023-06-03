import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Education } from './ResumeProps';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/typeography';
import { GetDateInformation } from '../utils/GetDateInformation';
import { useMediaQuery } from '@mui/material';
import { DateInfo, Title } from './Resume.styles';

const EducationData = ({educationInfo, index} : {educationInfo: Education, index: number}) => {

  educationInfo.dateObtained = new Date(educationInfo.dateObtained);

  const dateContent = GetDateInformation(educationInfo.dateObtained);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} md={2}>
          {index===0 && <Title theme={theme}>Education</Title> }
        </Grid>
        {isSmallScreen && <Grid item xs={1}></Grid>}
        <Grid item xs={11} md={8}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{fontWeight: 'bold'}}>{educationInfo.school}</Typography>&nbsp;
                <Typography>{educationInfo.location.city}</Typography>,&nbsp;
                <Typography>{educationInfo.location.state}</Typography>
                {isSmallScreen && <DateInfo>&nbsp;{dateContent}</DateInfo>}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography>{educationInfo.degree}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {!isSmallScreen && <Grid item xs={2} sx={{textAlign: 'right'}}>
          <DateInfo>{dateContent}</DateInfo>
        </Grid>}
      </Grid>
    </ThemeProvider>
  </Box>
  )
};

export default EducationData;