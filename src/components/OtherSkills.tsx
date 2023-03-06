import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RelevantSkills } from './ResumeProps';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme/typeography';

const OtherSkills = ({skills} : {skills: RelevantSkills[]}) => {

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={1}>
          <Box sx={{fontWeight: 'bold'}}>Technology Skills</Box>
        </Grid>
        <Grid item xs={11}>
        <Box>
            {skills.map((value, index)=>{
                return <Box>
                    <Typography>{value.category}</Typography>&nbsp;
                    ({value.examples.map((example, index)=>{ 
                        let separator = index!==value.examples.length-1 ? ", " : "";
                        return <Typography>{example}{separator}</Typography> 
                    })}) 
                </Box>
            })}
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  </Box>
  )
};

export default OtherSkills;