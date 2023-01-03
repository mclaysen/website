import React, {useState, Component} from 'react';
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {NameDiv} from './Resume.styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { useFetch } from '../api/useFetch';
import ProfessionalExperience from './ProfessionalExperience';

const Resume = () => {

  const {data, loading} = useFetch("/data/resume.json");
  if(loading)
    return(
      <div>loading</div>
    )
      return(
      <Container>
        <Grid>
          <Box sx={{
            display: "flex"
          }}>
            <Box><h1>{data?.name.first} {data?.name.middleInitial}. {data?.name.last}</h1></Box>
          </Box>
        </Grid>
        <Divider></Divider>
        <Grid 
          container 
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Box sx={{
              display: "flex"
            }}>
              {data?.address.city}, {data?.address.state} {data?.address.zip}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <p>{data?.phone}</p>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{
                display: "flex",
                justifyContent: 'flex-end',
              }}
            >
              <p>{data?.email}</p>
            </Box>
          </Grid>
        </Grid>
          {data?.jobExperience?.map((value, index)=>{
            return <ProfessionalExperience role={value} index={index}></ProfessionalExperience>
          })}

          
        
      </Container>)
}



export default Resume;