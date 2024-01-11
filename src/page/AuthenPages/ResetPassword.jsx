import {
  Button,
  createTheme,
  FormControl,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./AuthenPages.module.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#d23f57;",
    },
    secondary: {
      main: "#3b5998",
    },
    success: {
      main: "#4285f4;",
    },
  },
  typography: {
    fontFamily: [""],
    button: {
      textTransform: "none",
    },
  },
});

const ResetPassword = () => {
  return (
    <ThemeProvider theme={theme}>
      <section className={classes.container}>
        <div className={classes.signup}>
          <div className="logoSection">
            <Link to="/" className="logo logoform">
              HuntStore
            </Link>
            <p className="formTitle">Reset your password</p>
          </div>
          <form action="">
            <FormControl
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <TextField
                id="email"
                placeholder="Email Address"
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Button
                color="primary"
                disableElevation
                variant="contained"
                sx={{ fontWeight: "bolder", fontSize: "1rem" }}
              >
                Reset
              </Button>
              <div className="accountReset">
                <h2>Don't have account?</h2>
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </FormControl>
          </form>
        </div>
      </section>
    </ThemeProvider>
  );
};
export default ResetPassword;
