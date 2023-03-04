import React from 'react'
import { ArchiveIcon, CallBoxStyle, CallDetailStyle, UndoStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateCallMutation } from '../../store/api'
import { selectCallList } from '../../store/call.selectors'
import { updateCallList } from '../../store/call.reducer'

export const ArchiveOrUndo = ({ archiveOrUndo }) => {
  const activities = useSelector(selectCallList)
  const [updateCall] = useUpdateCallMutation()
  const dispatch = useDispatch()

  const handleArchiveAll = () => {
    activities.forEach(async (call) => {
      const state = {
        is_archived: true,
      }
      await updateCall({ id: call.id, state })
      dispatch(updateCallList({ id: call.id, state }))
    })
  }

  const handleUndoAll = () => {
    activities.forEach(async (call) => {
      const state = {
        is_archived: false,
      }
      await updateCall({ id: call.id, state })
      dispatch(updateCallList({ id: call.id, state }))
    })
  }

  return (
    <CallBoxStyle>
      {archiveOrUndo === 'archive' ? (
        <CallDetailStyle
          onClick={handleArchiveAll}
          style={{ marginTop: '0', marginBottom: '10px', padding: '15px 0' }}
        >
          <ArchiveIcon />
          <span style={{ fontWeight: '600' }}>Archive all calls</span>
        </CallDetailStyle>
      ) : archiveOrUndo === 'undo' ? (
        <CallDetailStyle
          onClick={handleUndoAll}
          style={{ marginTop: '0', marginBottom: '10px', padding: '15px 0' }}
        >
          <UndoStyle size="20" />
          <span style={{ fontWeight: '600' }}>Undo all archived calls</span>
        </CallDetailStyle>
      ) : null}
    </CallBoxStyle>
  )
}
