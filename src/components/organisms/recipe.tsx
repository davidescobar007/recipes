"use client"
import { useSelector } from "react-redux"
import Grid from "@mui/material/Grid"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"

import { RootState } from "@/store/store"
import { roundToOneDecimal } from "@/utils/recipeUtils"
import { Ingredient } from "@/utils/types"

import Form from "../molecules/form"
import UiList from "../molecules/list"
import UiTable from "../molecules/tableContainer"
import TableSkeletin from "../molecules/tableSkeletin"

export default function RecipeOrganism(): JSX.Element {
  const nutrientsData = useSelector<RootState, Ingredient[]>(
    (state) => state.recipe.data
  )
  const { error, isLoading } = useSelector<RootState, Record<any, any>>(
    (state) => state.recipe
  )

  if (error) throw new Error()

  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      justifyContent="space-evenly"
      paddingTop={5}
      paddingX={4}
      spacing={2}
    >
      <Form />
      <UiTable>
        <>
          {isLoading && <TableSkeletin />}

          {nutrientsData.map((item) => (
            <TableRow key={item.food}>
              <TableCell align="left">
                {roundToOneDecimal(item.quantity)}
              </TableCell>
              <TableCell align="left">{item.unit}</TableCell>
              <TableCell align="left">{item.food}</TableCell>
              <TableCell align="left">
                <UiList
                  carbs={item.nutrients.carbs}
                  energy={item.nutrients.energy}
                  fat={item.nutrients.fat}
                  protein={item.nutrients.protein}
                />
              </TableCell>
            </TableRow>
          ))}
        </>
      </UiTable>
    </Grid>
  )
}
