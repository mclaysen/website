import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { theme } from '../theme/typeography';

export const NameDiv = {
    align: "left"
}

export const Title = styled(Typography)(({ }) => ({
    fontWeight: 'bold',
    paddingBottom: '10px',
    fontSize:`${theme.typography.body1.fontSize}`,
    [theme.breakpoints.down('md')]: {
        fontSize:`${theme.typography.h6.fontSize}`,
    }
}));

export const DateInfo = styled(Typography)(({ }) => ({
    display: 'inline',
    fontSize:`${theme.typography.body1.fontSize}`,
    [theme.breakpoints.down('md')]: {
        fontSize:`${theme.typography.subtitle1.fontSize}`,
    }
}));