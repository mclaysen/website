import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ResumeMainProps, RelevantSkills } from './ResumeProps';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { start } from 'repl';
import { GetDateInformation } from '../utils/GetDateInformation';

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