/* eslint-disable react-hooks/rules-of-hooks */
import { useGetRecipesQuery } from "@/store/features/apiSlice"

export const useRecipesQuery = (recipeField: string) => {
  if (recipeField !== "") {
    return undefined
  }
  const { data } = useGetRecipesQuery(String(recipeField))
  return data
}
