import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import serviceApiCall, { errorMessages } from "@/utils/apiServicecAll"
import { RequestBuilder } from "@/utils/apiServicecAll"
import { API_URL } from "@/utils/contants"
import { recipeList } from "@/utils/data"
import { transformData } from "@/utils/recipeUtils"
import { InitialState, ReciptType } from "@/utils/types"

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: null,
  recipeList: recipeList
}

// Creational - *BUILDER
// The implementation of fetchRecipe is using the Builder pattern because it separates the
// construction of the ServiceApiCall object from its representation.

// Structural - *PROXY
// fetchRecipe function is making use of the Proxy Pattern indirectly. The RequestBuilder is a
// builder object that creates a request object that can be passed to the serviceApiCall function.
// The RequestBuilder acts as a proxy between the fetchRecipe function and the serviceApiCall
// function by creating a request object with the necessary parameters and headers.
export const fetchRecipe = createAsyncThunk<any, ReciptType>(
  "fetchRecipe",
  async (bodyRequest: ReciptType) => {
    const request = new RequestBuilder()
      .setMethod("POST")
      .setUrl(API_URL)
      .setHeader("Content-Type", "application/json")
      .setBody(bodyRequest)
      .build()
    const response = await serviceApiCall(request)
    const responseResolved = await response.json()
    if (response.status in errorMessages) {
      throw new Error(errorMessages[response.status])
    }
    return transformData(responseResolved)
  }
)

// Creational - *FACTORY
// this is making use of factory it provides an interface (createSlice)
// for creating a specific type of object (slice in this case) and allows subclasses
// (in this case, the reducers and extraReducers) to alter the type of object that will be created.
export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    resetError(state, _action: PayloadAction<any>) {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state, _action) => {
        state.isLoading = true
        state.error = null
        state.data = []
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.data = action.payload
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.isLoading = false
        state.error = action
      })
  }
})

export const { resetError } = recipeSlice.actions
export default recipeSlice.reducer
