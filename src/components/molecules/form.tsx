"use client"

import FormControl from "@mui/material/FormControl"
import Stack from "@mui/material/Stack"

import UiButton from "../atoms/button"
import UiTextField from "../atoms/inputFiled"
export default function Form(): JSX.Element {
  return (
    <FormControl>
      <Stack direction="row" spacing={2}>
        <UiTextField />
        <UiButton>Search</UiButton>
      </Stack>
    </FormControl>
  )
}
