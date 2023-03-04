import React from 'react'
import { useNavigate } from 'react-router'
import {
  ArchiveIcon,
  ArchiveSwipeStyle,
  UndoStyle,
  CallBoxStyle,
  CallDateStyle,
  CallDetailStyle,
  CallFromStyle,
  CallViaStyle,
  CallTimeStyle,
  ThreeDotVertStyle,
  PhoneOutcomingStyle,
  PhoneIncomingStyle,
  PhoneMissedStyle,
  VoicemailStyle,
} from './style'

import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'

import { useUpdateCallMutation } from '../../store/api'

import 'react-swipeable-list/dist/styles.css'
import { updateCallList } from '../../store/call.reducer'
import { useDispatch } from 'react-redux'

export const trailingActions = (handleCallArchive, isArchived) => (
  <TrailingActions>
    <SwipeAction onClick={() => handleCallArchive()} destructive={true}>
      <ArchiveSwipeStyle isArchived={isArchived}>
        {isArchived ? <UndoStyle size="24" /> : <ArchiveIcon style={{ minWidth: '24px' }} />}
      </ArchiveSwipeStyle>
    </SwipeAction>
  </TrailingActions>
)

export const CallIcon = ({ callType, direction }) => {
  if (direction === 'outbound') {
    return <PhoneOutcomingStyle size="18" />
  } else if (callType === 'answered') {
    return <PhoneIncomingStyle size="18" />
  } else if (callType === 'missed') {
    return <PhoneMissedStyle size="18" />
  } else if (callType === 'voicemail') {
    return <VoicemailStyle size="18" />
  } else {
    return null
  }
}

export const CallVia = ({ via }) => {
  return (
    <>
      tried to call on
      <span style={{ fontSize: '12.7px', fontWeight: '900' }}> {via}</span>
    </>
  )
}

export const CallFrom = ({ direction, from, to }) => {
  if (direction === 'inbound') {
    return <>{from}</>
  } else if (direction === 'outbound') {
    return <>{to}</>
  } else {
    return null
  }
}

export const CallBox = ({ id, date, from, to, callType, isArchived, via, direction }) => {
  const [ updateCall ] = useUpdateCallMutation()

  let newDate = new Date(date)
  let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  let timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  let formatDate = new Intl.DateTimeFormat('en-US', dateOptions)
  let formatTime = new Intl.DateTimeFormat('en-US', timeOptions)
  let shortDate = formatDate.format(newDate)
  let fullTime = formatTime.format(newDate)
  let time = fullTime.match(/[\d:]+/)
  let ampm = fullTime.match(/PM|AM/)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCallArchive = async () => {
    const state = {
      is_archived: !isArchived,
    }
    await updateCall({ id, state })
    dispatch(updateCallList({ id, state }))
  }

  const handleClick = () => {
    navigate(`/detail/${id}`)
  }

  return (
    <CallBoxStyle onClick={handleClick}>
      <CallDateStyle>{shortDate}</CallDateStyle>
      <SwipeableList destructiveCallbackDelay={100}>
        <SwipeableListItem trailingActions={trailingActions(handleCallArchive, isArchived)}>
          <CallDetailStyle>
            <CallIcon callType={callType} direction={direction} />
            <CallFromStyle>
              <CallFrom direction={direction} to={to} from={from} />
              <CallViaStyle>
                <CallVia via={via} />
              </CallViaStyle>
            </CallFromStyle>
            <ThreeDotVertStyle size="16" />
            <CallTimeStyle>
              <div id="time">{time}</div>
              <div id="ampm">{ampm}</div>
            </CallTimeStyle>
          </CallDetailStyle>
        </SwipeableListItem>
      </SwipeableList>
    </CallBoxStyle>
  )
}
