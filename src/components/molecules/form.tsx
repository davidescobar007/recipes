/* eslint-disable react/forbid-component-props */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useDispatch } from "react-redux"
import FormControl from "@mui/material/FormControl"
import Stack from "@mui/material/Stack"

import { fetchRecipe } from "@/store/features/recipeSlice"
import { AppDispatch } from "@/store/store"
import { parseIngredients } from "@/utils/recipeUtils"

import UiButton from "../atoms/button"
import UiTextField from "../atoms/inputFiled"

export default function Form(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()

  const onSubmitHandler = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { recipeField } = Object.fromEntries(formData.entries())
    const parsedRecipe = parseIngredients(String(recipeField))
    dispatch(fetchRecipe(parsedRecipe))
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl style={{ marginBottom: "30px" }}>
        <Stack direction="row" marginY={2} spacing={2}>
          <UiTextField name="recipeField" />
          <UiButton buttonType="submit">Search</UiButton>
        </Stack>
      </FormControl>
    </form>
  )
}
