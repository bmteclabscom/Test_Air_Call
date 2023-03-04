import { createSelector } from '@reduxjs/toolkit'

const selectCallState = (state) => state.call

export const selectCallList = createSelector(selectCallState, (state) => state.callList)
