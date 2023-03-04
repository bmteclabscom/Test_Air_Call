import React from 'react'
import { useSelector } from 'react-redux'
import { selectCallList } from '../../store/call.selectors'
import { CallBox, ArchiveOrUndo } from '../UI'

const ArchiveView = () => {
  const activities = useSelector(selectCallList)

  if (activities) {
    return (
      <>
        <ArchiveOrUndo archiveOrUndo={'undo'} />
        {activities.map((call, callIndex) =>
          call.is_archived ? (
            <CallBox
              key={call.id}
              date={call.created_at}
              from={call.from}
              to={call.to}
              callType={call.call_type}
              isArchived={call.is_archived}
              via={call.via}
              direction={call.direction}
              id={call.id}
              callIndex={callIndex}
            />
          ) : null,
        )}
      </>
    )
  } else {
    return null
  }
}

export default ArchiveView
