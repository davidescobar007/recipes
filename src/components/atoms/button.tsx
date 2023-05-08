"use client"
import Button from "@mui/material/Button"

import { Props } from "./types"

interface ButtonProps extends Props {
  buttonType?: "button" | "submit" | "reset"
  onClick?: () => void
}

export default function UiButton({
  children,
  buttonType = "button",
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Button type={buttonType} variant="contained" {...rest}>
      {children}
    </Button>
  )
}
