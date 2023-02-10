import {Grid, Typography} from "@mui/material";
import LinkForm from "./LinkForm";
import {useAppDispatch} from "../../app/hooks";
import {createLink} from "./linkThunk";
import {ILink} from "../../types";
import LinkResult from "./LinkResult";

const Link = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (link: ILink) => {
    dispatch(createLink(link))
  }

  return (
    <Grid container direction="column" spacing={2} alignItems='center'>
      <Grid item>
        <Typography variant="h4">Shorten your link!</Typography>
      </Grid>
      <Grid item>
        <LinkForm onSubmit={onSubmit}/>
      </Grid>
      <Grid item>
        <LinkResult/>
      </Grid>
    </Grid>
  );
};

export default Link;