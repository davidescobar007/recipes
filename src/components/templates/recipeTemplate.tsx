"use client"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import CardsContainerOrganisim from "../organisms/cardsContainer"
import RecipeOrganism from "../organisms/recipe"

/* Structural - *FACADE
          RecipeTemplate  is making use of Facade pattern,  
           it simplifies the interaction with a complex backstage system 
           by providing a higher-level interface/component.
          */

export default function RecipeTemplate() {
  return (
    <>
      <Typography
        flexDirection="row"
        gutterBottom
        justifyContent="space-evenly"
        marginX={15}
        marginY={4}
        variant="h5"
      >
        You can click any option, or you can also type the ingredients from
        recipe
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        spacing={{ xs: 1, sm: 2 }}
        useFlexGap
      >
        <CardsContainerOrganisim />
        <RecipeOrganism />
      </Stack>
    </>
  )
}
