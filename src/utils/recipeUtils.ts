import { Ingredient } from "./types"

export function parseIngredients(recipt: string): { ingr: string[] } {
  const ingr = recipt.split(",")
  return { ingr }
}

export function transformData(data: any): Ingredient[] {
  return data.ingredients.map((ingredient: any) => ({
    quantity: ingredient.parsed[0].quantity,
    unit: ingredient.parsed[0].measure,
    food: ingredient.parsed[0].foodMatch,
    nutrients: {
      energy: ingredient.parsed[0].nutrients.ENERC_KCAL,
      protein: ingredient.parsed[0].nutrients.PROCNT,
      fat: ingredient.parsed[0].nutrients.FAT,
      carbs: ingredient.parsed[0].nutrients.CHOCDF
    }
  }))
}

export function roundToOneDecimal(num: number) {
  return Number(num.toFixed(1))
}
