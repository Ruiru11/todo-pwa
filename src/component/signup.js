import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AcUnitinedIcon from "@material-ui/icons/AcUnit";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">A todo application @ruiru</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://res.cloudinary.com/dxecwuaqd/image/upload/v1615456544/david-norman-nzyBPhGJEcg-unsplash_qyhcjt.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginBottom: 20,
  },
  footer: {
    marginBottom: 0,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },
}));

export default function SignUpSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const history = useHistory();

  const options = {
    url: "http://localhost:3000/api/auth/registration",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      password: password,
      email: email,
      passwordConfirm: confirmPassword,
      username: username,
    },
  };
  // password
  const signUpAction = () => {
    axios(options)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200 && res.data.status) {
          history.push("/login");
        }
        if (res.data.message) {
          setError(true);
          setErrMessage(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response.data.email) {
          setError(true);
          setErrMessage(err.response.data.email);
        }
        if (err.response.data.passwordConfirm) {
          setError(true);
          setErrMessage(err.response.data.passwordConfirm);
        }
        if (err.response.data.password) {
          setError(true);
          setErrMessage(err.response.data.password);
        }
        if (err.response.data.message) {
          setError(true);
          setErrMessage(err.response.data.password);
        }
      });
  };

  const toggleButton = () => {
    let status = true;
    if (
      password &&
      confirmPassword &&
      username &&
      email &&
      password === confirmPassword
    ) {
      status = false;
    }
    return status;
  };

  useEffect(() => {
    toggleButton();
  });

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AcUnitinedIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="email"
              value={username}
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* {error && <p className={classes.error}>{errMessage}</p>} */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPasscode ? "text" : "password"}
              id="password"
              // autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    {showPasscode ? (
                      <VisibilityIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPasscode(false)}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPasscode(true)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Confirm password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              type={showPasscode ? "text" : "password"}
              id="Confirm password"
              // autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    {showPasscode ? (
                      <VisibilityIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPasscode(false)}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPasscode(true)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={classes.error}>{errMessage}</p>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => signUpAction()}
              disabled={toggleButton()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <Box className={classes.footer} mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
