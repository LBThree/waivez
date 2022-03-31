// www.waivez.com/partners

import React from 'react';
import Head from "next/head";
import {Box, Container, Typography} from "@mui/material";
import PartnerDirectory from "../../components/PartnerPage/PartnerDirectory";

const PartnersPage = () => {
    return (
        <Box
            sx={{
                // border: '4px solid green'
            }}>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           pb: 10,
                           // border: '2px solid orange'
                       }}>
                <Head>
                    <title>
                        Partners
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'}>
                    partners
                </Typography>
                <Typography variant={'h4'} sx={{mt: 5}}>
                    Find the company you want to sign a waiver with.
                </Typography>
            </Container>

            <Container
                sx={{
                    backgroundColor: 'clear',
                    // border: '2px solid black',
                    // minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {xs: 0, sm: 0, lg: 0, xl: 0}, //keeps content to edge of screen
                    mb: 10,
                }}>
                <PartnerDirectory/>
            </Container>
        </Box>
    );
};

export default PartnersPage;
