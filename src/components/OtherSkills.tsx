import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SkillInformation } from './ResumeProps';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { Title } from './Resume.styles';
import { useMediaQuery } from '@mui/material';

const OtherSkills = ({skills} : {skills: SkillInformation[]}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      {skills.map((skillType, index)=> {
        return (
        <Grid container>
          <Grid item xs={12} md={2}>
            <Title>{skillType.category}</Title>
          </Grid>
          {isSmallScreen && <Grid item xs={1}></Grid>}
          <Grid item xs={11} md={8}>
            <Box>
              {skillType.specificSkills.map((skillInfo, index)=>{
                  return <Box>
                      <Typography sx={{fontWeight:'bold'}}>{skillInfo.type}</Typography>
                      <br />
                      <Box sx={{paddingLeft:'20px'}}>
                        <Typography>{skillInfo.examples.join(", ")}</Typography>
                      </Box>
                  </Box>
              })}
            </Box>
          </Grid>
        </Grid>)
      })}
    </ThemeProvider>
  </Box>
  )
};

export default OtherSkills;