"use client"
import Button from "@mui/material/Button"

import { Props } from "./types"

export default function UiButton({ children }: Props): JSX.Element {
  return <Button variant="contained">{children}</Button>
}
