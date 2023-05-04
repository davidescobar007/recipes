"use client"
import Grid from "@mui/material/Grid"

import Form from "../molecules/form"
import UiTable from "../molecules/tableContainer"

export default function RecipeOrganism(): JSX.Element {
  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      justifyContent="space-evenly"
      padding={10}
      spacing={2}
    >
      <Form />
      <UiTable />
    </Grid>
  )
}
