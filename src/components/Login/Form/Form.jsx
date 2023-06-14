import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Texto } from "../../../styles/ProfileStyles/ProfileStyles";

function Form() {
  const [user, setUser] = useState("");
  const [errors, setErrors] = useState({
    user: {
      error: true,
      message: "Invalid name",
    },
    password: {
      error: true,
      message: "Incorrect password",
    },
  });

  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        id="user"
        label="User"
        fullWidth
        error={errors.user.error}
        helperText={errors.user.message}
        onChange={(e) => setUser(e.target.value)}
      />
      <TextField id="password" label="Password" fullWidth type="password" />
      <Button type="sumbit" fullWidth variant="contained">
        Login
      </Button>
      <Texto tam=".9em">Forgot password?</Texto>
    </Box>
  );
}

export default Form;
