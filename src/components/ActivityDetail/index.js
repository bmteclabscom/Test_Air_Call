import React, { useMemo } from 'react'
import { useGetDetailQuery } from '../../store/api'
import { useParams } from 'react-router'
import { CallDetail } from '../UI'
const ActivityDetail = () => {
  const { id } = useParams()
  const { data } = useGetDetailQuery(id)
  useMemo(() => {
    console.log('detail', data)
  }, [])
  if (data) {
    return (
      <>
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
      </>
    )
  } else {
    return null
  }
}

export default ActivityDetail
