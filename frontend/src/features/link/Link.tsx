import React from 'react';
import {Grid, Typography} from "@mui/material";
import LinkForm from "./LinkForm";

const Link = () => {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant="h4">Shorten your link!</Typography>
            </Grid>
            <Grid item>
                <LinkForm/>
            </Grid>
        </Grid>
    );
};

export default Link;