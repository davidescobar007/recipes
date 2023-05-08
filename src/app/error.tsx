"use client"
import { useDispatch } from "react-redux"
import Stack from "@mui/material/Stack"

import UiButton from "@/components/atoms/button"
import UiError from "@/components/organisms/error"
import { resetError } from "@/store/features/recipeSlice"

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  const dispatch = useDispatch()

  const handleReset = () => {
    reset()
    dispatch(resetError(null))
  }
  return (
    <main>
      <Stack padding={15} spacing={2}>
        <UiError>
          {/* Structural - *DECORATOR
          UiButton component is making use of Decorator pattern,  
          it allows behavior to be added to an individual object or component
          by adding some extra functionality to it without changing its original code "onClick"
          */}
          <UiButton buttonType="button" onClick={handleReset}>
            Try again
          </UiButton>
        </UiError>
      </Stack>
    </main>
  )
}
