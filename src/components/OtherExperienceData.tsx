import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ResumeMainProps, OtherExperience } from './ResumeProps';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { start } from 'repl';
import { GetDateInformation } from '../utils/GetDateInformation';
import OtherExperienceDetailData from './OtherExperienceDetailData';

const OtherExperienceData = ({otherExperienceInfo, index} : {otherExperienceInfo: OtherExperience, index: number}) => {

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={1}>
          <Box sx={{fontWeight: 'bold'}}>{otherExperienceInfo.category}</Box>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
                {
                    otherExperienceInfo.type.map((value, index)=>{
                        return <OtherExperienceDetailData otherExperienceDetailInfo={value}></OtherExperienceDetailData>
                    })
                }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  </Box>
  )
};

export default OtherExperienceData;