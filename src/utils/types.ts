export interface ReciptType {
  ingr: string[]
}

export interface ServiceApiCall {
  method: string
  url: string
  body?: Record<any, any>
}

export interface InitialState {
  isLoading: boolean
  data: Ingredient[]
  recipeList: CardType[]
  error: null | Record<any, any>
}

export interface Nutrients {
  energy: Record<any, any>
  protein: Record<any, any>
  fat: Record<any, any>
  carbs: Record<any, any>
}

export interface Ingredient {
  quantity: number
  unit: string
  food: string
  nutrients: Nutrients
}

export interface CardType {
  avatar: string
  title: string
  alt: string
  picture: string
  ingredients?: string
}

export type Children = {
  children: React.ReactElement[] | React.ReactElement
}
