"use client"

import TextField from "@mui/material/TextField"

export default function UiTextField(): JSX.Element {
  return (
    <TextField
      id="outlined-basic"
      label="Recipe"
      placeholder="Type your recipes"
      variant="outlined"
    />
  )
}
