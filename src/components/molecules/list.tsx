import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

import { roundToOneDecimal } from "@/utils/recipeUtils"
import { Nutrients } from "@/utils/types"

export default function UiList({
  energy,
  protein,
  fat,
  carbs
}: Nutrients): JSX.Element {
  return (
    <List>
      <ListItem disablePadding>
        {energy?.label}:<b>&nbsp;{roundToOneDecimal(energy?.quantity)}</b>
        <b>&nbsp;{energy?.unit}</b>
      </ListItem>
      <ListItem disablePadding>
        {protein?.label}:<b>&nbsp;{roundToOneDecimal(protein?.quantity)}</b>
        <b>&nbsp;{protein?.unit}</b>
      </ListItem>
      <ListItem disablePadding>
        Fat: <b>&nbsp;{roundToOneDecimal(fat?.quantity)}</b>
        <b>&nbsp;{fat?.unit}</b>
      </ListItem>
      <ListItem disablePadding>
        Carbs: <b>&nbsp;{roundToOneDecimal(carbs?.quantity)}</b>
        <b>&nbsp;{carbs?.unit}</b>
      </ListItem>
    </List>
  )
}
