import React from "react";
import {
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import StandardPricingCard from "./StandardPricingCard";
import AdvancedPricingCard from "./AdvancedPricingCard";
import ProPricingCard from "./ProPricingCard";

const FeaturesPricingSection = () => {
    return (
        <Box
            sx={{
                height: {xs: 3000, sm: 3000, md: 1600, lg: 1600, xl: 1700},
                background: "linear-gradient(0deg, #f9f9f9, #bc9bde, #7f00ff)",
                // border: '2px solid red'
            }}
        >
            <Container maxWidth={"md"}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography variant={"h2"} color={"text.content"}>
                        The most advanced waiver technology in the industry.
                    </Typography>

                    <Box sx={{display: "flex", flexDirection: "row", mt: 5}}>
                        <List sx={{color: "white"}}>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Return Probability Index (RPI)®"}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Customer Heat Maps"}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon fontSize="large" sx={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Machine Learning & AI Analytics"}/>
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Typography
                    color={"text.content"}
                    variant="h2"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        mt: 15,
                        mb: 2,
                    }}
                >
                    Choose the plan that meets your companies needs.
                </Typography>
            </Container>
                <Container
                    maxWidth={'lg'}
                    disableGutters={true}
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
    );
};

export default FeaturesPricingSection;
