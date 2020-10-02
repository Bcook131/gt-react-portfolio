import React from "react";
import {
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';



const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

return (
  <React.Fragment>
    <Container
      maxWidth="lg"
      style={{ backgroundColor: "#37474f", marginTop: "20px" }}
    >
      <Avatar
        alt="Brian Cook"
        src="https://i.imgur.com/Atodq5v.png"
        className={classes.large}
      />
      <Typography
        variant="subtitle1"
        component="subtitle1"
        style={{ color: "white" }}
      >
        My name is Brian Nicholas Cook. I grew up in McDonough, GA. I went to high school at Union Grove
        High School and then went to college at The Universoty of Central Arkansas. I played baseball
        and basketball almost all of my life. Some of my hobbies include but aren't limited to xbox,
        basketball, baseball, ultimate frisbee, and PC. I completed the Georgia Tech Full Stack Flex Web Developement bootcamp. I am a quick adapter and can work well with groups to get work done.
        </Typography>
    </Container>
  </React.Fragment>
);
}