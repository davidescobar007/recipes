import { useSelector } from "react-redux"

import { RootState } from "@/store/store"
import { CardType } from "@/utils/types"

import UiCard from "../molecules/card"

// Behavioral - *ITERATOR
// The UiCard component is being rendered for each item in the array,
// which shows that the component is effectively iterating over the array to create a series of UI components.
export default function CardsContainer() {
  const { recipeList } = useSelector<RootState, any>((state) => state.recipe)
  return recipeList.map((item: CardType) => (
    <UiCard
      alt={item.alt}
      avatar={item.avatar}
      ingredients={item.ingredients}
      key={item.alt}
      picture={item.picture}
      title={item.title}
    />
  ))
}
