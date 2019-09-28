import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
}));

export default function CreateAlbum(props) {
  const classes = useStyles();

  return props.albums.map(album => {
    return (
      <Paper key={album.id} className={classes.root}>
        <Typography variant="h5" component="h2">
          {album.title}
        </Typography>
      </Paper>
    );
  });
}
