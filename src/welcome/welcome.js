import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class WelcomeComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Chatsapp
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Chatsapp is a free messaging web app. Chatsapp allows you to
              message friends and family. Leave Whatsapp behind, Chatsapp is the
              future.
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to="/login">
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">
                  <Button variant="contained" color="primary">
                    Signup
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}

export default WelcomeComponent;
