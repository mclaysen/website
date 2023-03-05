import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ResumeMainProps, ExperienceInformation } from './ResumeProps';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { start } from 'repl';
import { GetDateInformation } from '../utils/GetDateInformation';

const OtherExperienceDetailData = ({otherExperienceDetailInfo} : {otherExperienceDetailInfo: ExperienceInformation}) => {

  return (<Box sx={{
    display: "flex",
    textAlign: "left"
  }}>

    <Grid item xs={12}>
        <Box>
            <Typography sx={{fontWeight: 'bold'}}>{otherExperienceDetailInfo.title}</Typography>&nbsp;
        </Box>
        <Box>
            <Typography sx={{fontStyle: 'italic'}}>{otherExperienceDetailInfo.subTitle}</Typography>
        </Box>
    </Grid>
  </Box>
  )
};

export default OtherExperienceDetailData;