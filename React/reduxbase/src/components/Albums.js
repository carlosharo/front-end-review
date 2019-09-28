import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

import { fetchAlbums } from "../actions";
import CreateAlbum from "./CreateAlbum";

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <>
        <Typography variant="h5" component="h2">
          Albums
        </Typography>
        <br />
        <CreateAlbum albums={this.props.albums} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { albums: state.albums };
};

export default connect(
  mapStateToProps,
  { fetchAlbums }
)(Albums);
