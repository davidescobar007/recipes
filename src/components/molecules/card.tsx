"use client"
import { useDispatch } from "react-redux"
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import { red } from "@mui/material/colors"

import { fetchRecipe } from "@/store/features/recipeSlice"
import { AppDispatch } from "@/store/store"
import { parseIngredients } from "@/utils/recipeUtils"
import { CardType } from "@/utils/types"

import UiButton from "../atoms/button"
export default function RecipeReviewCard({
  avatar,
  title,
  alt,
  picture,
  ingredients
}: CardType): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const onSubmitHandler = () => {
    const parsedRecipe = parseIngredients(String(ingredients))
    dispatch(fetchRecipe(parsedRecipe))
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{ bgcolor: red[500] }}>
            {avatar}
          </Avatar>
        }
        title={title}
      />
      <CardMedia alt={alt} component="img" height="194" image={picture} />

      <CardActions disableSpacing>
        <UiButton onClick={onSubmitHandler}>See Nutrients</UiButton>
      </CardActions>
    </Card>
  )
}
