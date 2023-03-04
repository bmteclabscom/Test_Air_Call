import React from 'react'
import { ArchiveOrUndo, CallBox } from '../UI'
import { useSelector } from 'react-redux'
import { selectCallList } from '../../store/call.selectors'

const ActivityFeed = () => {
  const activities = useSelector(selectCallList)

  if (activities) {
    return (
      <>
        <ArchiveOrUndo archiveOrUndo={'archive'} />
        {activities.map((call, callIndex) =>
          !call.is_archived ? (
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

export default ActivityFeed
