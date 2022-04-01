import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: {xs: 800, sm: 900, md: 1000, lg: 1100},
                background: 'linear-gradient(180deg, #f9f9f9, #bc9bde, #7f00ff)',
                justifyContent: 'center',
            }}>
            <Container maxWidth={'md'}>
                <Box
                    sx={{
                        mt: 15,
                        height: {xs: 400, sm: 400, md: 600},
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <Typography variant={'h2'} sx={{}}>
                        Any waiver.
                    </Typography>

                    <Typography variant={'h2'}>
                        All in one place.
                    </Typography>

                    <KeyboardArrowDownOutlinedIcon sx={{my: 5, color: ''}}/>

                    <Typography variant={'h2'} sx={{}}>
                        Any business.
                    </Typography>

                    <Typography variant={'h2'} color={'text.content'} sx={{mt: 3}}>
                        Anywhere.
                    </Typography>
                </Box>

                <Box sx={{
                    height: {xs: 250, md: 250, lg: 300},
                    display: 'flex',
                    alignItems: 'flex-end',
                }}>
                    <Typography variant={'h3'} color={'text.content'} sx={{textAlign: 'center', lineHeight: 1.3}}>
                        Whether your business is on the water, in the air, or somewhere in between...Waivez has you
                        covered!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;