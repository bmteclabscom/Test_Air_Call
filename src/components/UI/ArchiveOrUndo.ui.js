import React, { useState } from 'react'
import { ArchiveIcon, CallBoxStyle, CallDetailStyle, UndoStyle } from './style'
import { useSelector } from 'react-redux'
import { useUpdateCallMutation, useResetMutation, useGetAllCallListsQuery } from '../../store/api'
import { selectCallList } from '../../store/call.selectors'
import { Processing } from './Processing.ui'
export const ArchiveOrUndo = ({ archiveOrUndo }) => {
  const [ processing, setProcessing ] = useState(false)

  const activities = useSelector(selectCallList)
  const [ updateCall ] = useUpdateCallMutation()
  const [ reset ] = useResetMutation()
  const { refetch } = useGetAllCallListsQuery()

  const handleArchiveAll = async () => {
    setProcessing(true)
    for await (const call of activities) {
      const state = {
        is_archived: true,
      }
      if (!call.is_archived) {
        await updateCall({ id: call.id, state })
      }
    }
    await refetch()
    setProcessing(false)
  }

  const handleUndoAll = async () => {
    setProcessing(true)
    await reset()
    await refetch()
    setProcessing(false)
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
      {processing && <Processing />}
    </CallBoxStyle>
  )
}
