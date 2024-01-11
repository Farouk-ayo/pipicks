import {
  Autocomplete,
  Box,
  Button,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { countries } from "./Country";
import { states } from "./Country";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(210, 63, 87);",
    },
  },
  typography: {
    fontFamily: [""],
    button: {
      textTransform: "none",
    },
  },
});

export const CreditCardDetails1 = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      flexWrap={"nowrap"}
      width={"100%"}
      flexDirection={isMobile ? "column" : "row"}
      gap={isMobile ? "1rem" : "2rem"}
    >
      <ThemeProvider theme={theme}>
        <TextField
          id="card-number"
          label="Card Number"
          placeholder="1234 5678 9123 4567"
          size="small"
          variant="outlined"
          fullWidth
          inputProps={{
            maxLength: 16,
            pattern: "\\d*",
            inputMode: "numeric",
          }}
        />
        <TextField
          id="exp-date"
          label="Exp Date"
          placeholder="mm/yy"
          size="small"
          variant="outlined"
          fullWidth
        />
      </ThemeProvider>
    </Box>
  );
};

export const CreditCardDetails2 = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      flexWrap={"nowrap"}
      width={"100%"}
      flexDirection={isMobile ? "column" : "row"}
      gap={isMobile ? "1rem" : "2rem"}
    >
      <ThemeProvider theme={theme}>
        <TextField
          id="card-name"
          label="Name on Card"
          placeholder="Mustapha Farouk Opeyemi"
          variant="outlined"
          size="small"
          fullWidth
        />
        <TextField
          id="Cvc"
          label="CVC"
          placeholder="123"
          size="small"
          variant="outlined"
          fullWidth
        />
      </ThemeProvider>
    </Box>
  );
};

export const SubmitButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="outlined" sx={{ fontWeight: "bolder" }}>
        Submit
      </Button>
    </ThemeProvider>
  );
};

export const PaypalEmail = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      gap="2rem"
      flexWrap={"nowrap"}
      width={"100%"}
    >
      <ThemeProvider theme={theme}>
        <TextField
          placeholder="Email Address"
          label="Email Address"
          type="email"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Button
          color="primary"
          variant="outlined"
          sx={{ fontWeight: "bolder" }}
        >
          Submit
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export const ShippingAddress1 = () => {
  return (
    <Stack style={{ width: "100%" }} gap={"1rem"}>
      <ThemeProvider theme={theme}>
        <TextField
          placeholder="Full Name"
          label="Full Name"
          type="text"
          size="small"
          sx={{ width: "100%" }}
        />
        <TextField
          placeholder="Phone Number"
          label="Number"
          size="small"
          sx={{ width: "100%" }}
        />
        <TextField
          placeholder="11023"
          label="Zip Code"
          size="small"
          sx={{ width: "100%" }}
        />
        <TextField
          placeholder="Address 1"
          label="Address 1"
          size="small"
          sx={{ width: "100%" }}
        />
      </ThemeProvider>
    </Stack>
  );
};

export const ShippingAddress2 = () => {
  return (
    <Stack style={{ width: "100%" }} gap={"1rem"}>
      <ThemeProvider theme={theme}>
        <TextField
          placeholder="Email Address"
          label="Email Address"
          type="email"
          size="small"
          sx={{ width: "100%" }}
        />
        <TextField
          placeholder="Company"
          label="Company"
          type="text"
          size="small"
          sx={{ width: "100%" }}
        />
        <Autocomplete
          size="small"
          id="countries"
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country"
              placeholder="Select Country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <TextField
          placeholder="Address 2"
          label="Address 2"
          size="small"
          sx={{ width: "100%" }}
        />
      </ThemeProvider>
    </Stack>
  );
};

export const TotalAmount = () => {
  return (
    <Stack style={{ width: "100%" }} gap={"1rem"}>
      <ThemeProvider theme={theme}>
        <TextField
          placeholder="Voucher"
          label="Voucher"
          size="small"
          sx={{ width: "100%" }}
        />
        <Button
          color="primary"
          variant="outlined"
          sx={{ fontWeight: "bolder" }}
        >
          Apply Voucher
        </Button>
      </ThemeProvider>
    </Stack>
  );
};

const Form = () => {
  const navigate = useNavigate();
  const checkOut = () => {
    navigate(`checkout`);
  };

  return (
    <Stack style={{ width: "100%" }} gap={"1rem"}>
      <ThemeProvider theme={theme}>
        <TextField
          placeholder="Voucher"
          label="Voucher"
          size="small"
          sx={{ width: "100%" }}
        />
        <Button
          color="primary"
          variant="outlined"
          sx={{ fontWeight: "bolder", fontSize: "1rem" }}
        >
          Apply Voucher
        </Button>
        <hr style={{ margin: "2rem 0rem" }} />
        <InputLabel sx={{ color: "black", fontWeight: "500" }}>
          Shipping Estimates
        </InputLabel>
        <Autocomplete
          size="small"
          id="countries"
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country"
              placeholder="Select Country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <FormControl size="small">
          <InputLabel id="select-state">State</InputLabel>
          <Select
            fullWidth
            labelId="select-state"
            id="select-state"
            label="State"
            size="small"

            // MenuProps={{
            //   PaperProps: {
            //     style: {
            //       maxHeight: "200px",
            //     },
            //   },
            // }}
          >
            {states.map((eachState) => (
              <MenuItem key={eachState.code} value={eachState.name}>
                {eachState.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          placeholder="11023"
          label="Zip Code"
          size="small"
          sx={{ width: "100%" }}
        />
        <Button
          color="primary"
          variant="outlined"
          sx={{ fontWeight: "bolder", fontSize: "1rem" }}
        >
          Calculate Shipping
        </Button>
        <Button
          color="primary"
          disableElevation
          variant="contained"
          sx={{ fontWeight: "bolder", fontSize: "1rem" }}
          onClick={checkOut}
        >
          Checkout Now
        </Button>
      </ThemeProvider>
    </Stack>
  );
};

export default Form;
