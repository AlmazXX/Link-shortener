import { Grid, Link, styled, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { apiURL } from "../../constants";
import { selectShortUrl } from "./linkSlicer";

const LinkResult = () => {
  const shortUrl = useAppSelector(selectShortUrl);

  const ResultBox = styled(Link)({
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "4px",
    padding: "16.5px 14px",
  });

  return shortUrl ? (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item>
        <Typography variant="h6" component="div">
          Your new link look like this:
        </Typography>
      </Grid>
      <Grid item>
        <ResultBox
          underline="none"
          href={apiURL + "/" + shortUrl}
          target="_blank"
        >
          {apiURL + "/" + shortUrl}
        </ResultBox>
      </Grid>
    </Grid>
  ) : null;
};

export default LinkResult;