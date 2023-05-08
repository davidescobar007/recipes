"use client"
import { useSelector } from "react-redux"
import Alert from "@mui/material/Alert"

import { RootState } from "@/store/store"
import { Children } from "@/utils/types"

export default function UiError({ children }: Children): JSX.Element {
  const error = useSelector<RootState, any>((state) => state.recipe.error)

  return (
    <>
      <Alert severity="error">{error?.error.message}</Alert>
      {children}
    </>
  )
}
