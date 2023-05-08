"use client"

import TextField from "@mui/material/TextField"

export default function UiTextField({ ...rest }): JSX.Element {
  return (
    <TextField
      {...rest}
      label="Recipe"
      placeholder="Type your recipes"
      variant="outlined"
    />
  )
}
