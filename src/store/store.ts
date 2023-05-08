"use client"

import { configureStore } from "@reduxjs/toolkit"

import recipeReducer from "./features/recipeSlice"

// Creational - *SINGLETON
// this is making use of singleton because it is one instance that provides
// a global point of access
export const store = configureStore({
  reducer: {
    recipe: recipeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
