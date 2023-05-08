"use client"
import Stack from "@mui/material/Stack"

import CardsContainerOrganisim from "../organisms/cardsContainer"
import RecipeOrganism from "../organisms/recipe"

/* Structural - *FACADE
          RecipeTemplate  is making use of Facade pattern,  
           it simplifies the interaction with a complex backstage system 
           by providing a higher-level interface/component.
          */

export default function RecipeTemplate() {
  return (
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
  )
}
