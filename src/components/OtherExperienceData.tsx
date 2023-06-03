import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography';
import { OtherExperience, ExperienceInformation } from './ResumeProps';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../theme/typeography';
import { GetDateInformation } from '../utils/GetDateInformation';
import { DateInfo, Title } from './Resume.styles';
import { useMediaQuery } from '@mui/material';

const GetPageDateInformation = ({experienceInformation} : {experienceInformation: ExperienceInformation}) =>
{
    if(experienceInformation.startDate !==undefined && experienceInformation.endDate===undefined)
    {
        const startDate = new Date(experienceInformation.startDate);
        return <DateInfo>{GetDateInformation(startDate)}</DateInfo>
    }
    else if(experienceInformation.endDate!==undefined)
    {
        const startDate = new Date(experienceInformation.startDate);
        const endDate = new Date(experienceInformation.endDate);
        return <DateInfo>{GetDateInformation(startDate, endDate, false)}</DateInfo>
    }
    return <></>
}


const OtherExperienceData = ({otherExperienceInfo, index} : {otherExperienceInfo: OtherExperience, index: number}) => {
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (<Box sx={{
        display: "flex",
        textAlign: "left"
    }}>
    <ThemeProvider theme={theme}>
        <Grid container>
        {
            otherExperienceInfo.type.map((value, index)=>{
                return <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} md={2}>
                                    <Title>{otherExperienceInfo.category}</Title>
                                </Grid>
                                {isSmallScreen && <Grid item xs={1}></Grid>}
                                <Grid item xs={11} md={8}>
                                    <Box>
                                        <Typography sx={{fontWeight: 'bold'}}>{value.title}</Typography>
                                        {isSmallScreen && <>&nbsp;<GetPageDateInformation experienceInformation={value}></GetPageDateInformation></>}
                                    </Box>
                                    <Box>
                                        <Typography sx={{fontStyle: 'italic'}}>{value.subTitle}</Typography>
                                    </Box>
                                    <List>
                                        {value.highlights?.map((value, index)=>{
                                            return <ListItem disablePadding><ListItemText inset primary = {value}></ListItemText></ListItem>
                                        })}
                                    </List>
                                </Grid>
                                {!isSmallScreen && <Grid item xs={2} sx={{textAlign: 'right'}}>
                                    <GetPageDateInformation experienceInformation={value}></GetPageDateInformation>
                                </Grid>}
                            </Grid>
                        </Grid>
                    })
                }
            </Grid>
    </ThemeProvider>
  </Box>
  )
};

export default OtherExperienceData;