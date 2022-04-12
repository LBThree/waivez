// www.waivez.com/pricing
import React from 'react';
import Head from "next/head";
import {Container, List, ListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StandardPricingCard from "../../components/Cards/StandardPricingCard";
import AdvancedPricingCard from "../../components/Cards/AdvancedPricingCard";
import ProPricingCard from "../../components/Cards/ProPricingCard";
import Logo from "../../components/Graphics/Logo";

const PricingPage = () => {
    return (
        <Box sx={{}}>
            <Container maxWidth='lg'
                       sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                       }}>
                <Head>
                    <title>
                        Pricing
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'} sx={{mt: 15}}>
                    pricing
                </Typography>

                <Typography variant={'h4'} sx={{my: 5, textAlign: 'center',}}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Waivez has price points for any business size. Whether you're a small family business, large
                    franchise organization, or just getting started — we have you covered... literally.
                </Typography>
            </Container>

            <Box sx={{
                background: "linear-gradient(180deg, #f9f9f9, #bc9bde, #7f00ff)",
                height: {xs: 2300, sm: 2300, md: 1000,},
                // border: "2px solid green"
            }}>
                <Container
                    disableGutters={true}
                    maxWidth={'lg'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: {xs: 'column', md: 'row'},
                        // border: '2px solid red',
                    }}>
                    <StandardPricingCard/>
                    <AdvancedPricingCard/>
                    <ProPricingCard/>
                </Container>
            </Box>

            <Box sx={{
                background: "linear-gradient(0deg, #f9f9f9, #bc9bde, #7f00ff)",
                height: 1500
            }}>
                <Container maxWidth={'lg'} disableGutters={true}>
                    <Box sx={{minWidth: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            // border: '2px solid red',
                            // width: {xs: 200},
                            // height: {xs: 200},
                        }}>
                            <Typography variant={'h2'} color={'text.content'} sx={{textAlign: 'center', mb: 2}}>
                                Simple when <br/> you need it.
                            </Typography>

                            <Logo height={'50%'} width={'50%'} color={'#f9f9f9'}/>

                            <Typography variant={'h2'} color={'text.content'} sx={{textAlign: 'center', mt: 2}}>
                                Sophisticated <br/> when you want it.
                            </Typography>
                        </Box>
                    </Box>
                    <Box>

                    </Box>

                </Container>
            </Box>
        </Box>
    );
};

export default PricingPage;
