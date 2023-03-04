import React from 'react'
import { useGetDetailQuery } from '../../store/api'
import { useParams } from 'react-router'
import { CallDetail } from '../UI'
const ActivityDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetDetailQuery(id, { refetchOnMountOrArgChange: true })
  if (data) {
    return (
      <>
        {isLoading ? (
          <>...Loading</>
        ) : (
          <CallDetail
            date={data?.created_at}
            from={data?.from}
            to={data?.to}
            callType={data?.call_type}
            isArchived={data?.is_archived}
            via={data?.via}
            direction={data?.direction}
            id={data?.id}
            duration={data?.duration}
          />
        )}
      </>
    )
  } else {
    return null
  }
}

export default ActivityDetail
