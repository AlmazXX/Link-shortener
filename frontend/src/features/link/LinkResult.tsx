import React from 'react';
import {Grid, Typography} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {selectShortUrl} from "./linkSlicer";
import {apiURL} from "../../constants";

const LinkResult = () => {
  const shortUrl = useAppSelector(selectShortUrl);

  return shortUrl ? (
    <Grid container direction='column' spacing={2} alignItems='center'>
      <Grid item>
        <Typography variant="h6" component="div">Your new link look like this:</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2' component='a' color='#000' href={apiURL + '/' + shortUrl} target='_blank' style={{
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderRadius: '4px',
          padding: '16.5px 14px'
        }}>{apiURL + '/' + shortUrl}</Typography>
      </Grid>
    </Grid>
  ) : null;
};

export default LinkResult;