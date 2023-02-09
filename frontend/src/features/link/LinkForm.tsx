import React from 'react';
import {Button, Grid, TextField} from "@mui/material";

const LinkForm = () => {
    return (
        <form>
            <Grid container direction="column" spacing={2}>
                <Grid item xs>
                    <TextField id='link' name='link' label='Link'/>
                </Grid>
                <Grid item xs>
                    <Button type='submit' variant='contained' color="primary">Shorten!</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default LinkForm;