import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const ContentBlockVertical = ({topText, variantTop,lineHeightTop, bottomText, variantBottom, lineHeightBottom}) => {

    return (
        <Box sx={{
            height: {xs: 500, sm: 500, md: 600, lg: 650, xl: 700},
            width: {xs: 350, sm: 450, md: 720, lg: 750, xl: 800},
            background: 'radial-gradient(ellipse at 101% 72%,#7f00ff, #9833ff, #b266ff, #cb99ff)',
            boxShadow: '0px 0px 10px 0px rgba(127,0,255,0.75)',
            borderRadius: 5,
            my: 2,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                width: '100%',
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'center',
                px: {md: 10},
            }}>
                <Typography variant={variantTop} color={'text.content'} lineHeight={lineHeightTop}>
                    {topText}
                </Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: '50%',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <Typography variant={variantBottom} color={'text.content'} lineHeight={lineHeightBottom} sx={{mx: 4}}>
                    {bottomText}
                </Typography>

            </Box>

        </Box>
    );
};

export default ContentBlockVertical;
