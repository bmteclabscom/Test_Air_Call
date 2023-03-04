import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  callList: [],
}

export const callSlice = createSlice({
  name: 'call',
  initialState: INITIAL_STATE,
  reducers: {
    setCallList(state, action) {
      state.callList = action.payload
    },
  },
})

export const { setCallList } = callSlice.actions

export const updateCallList =
  ({ id, state }) =>
    (dispatch, getState) => {
      const { call } = getState()
      let callList = [ ...call.callList ]
      const index = callList.findIndex((call) => call.id == id)
      const newCall = {
        ...callList[ index ],
        is_archived: state.is_archived,
      }

      callList.splice(index, 1, newCall)
      console.log('newCallList', callList)
      dispatch(setCallList(callList))
    }

export default callSlice.reducer
