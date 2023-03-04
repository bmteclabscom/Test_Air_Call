import styled from 'styled-components'
import { MoreVertical } from '@styled-icons/feather'
import {
  TelephoneInboundFill,
  TelephoneOutboundFill,
  TelephoneXFill,
  Voicemail,
} from '@styled-icons/bootstrap'
import { Undo, Archive } from '@styled-icons/fa-solid'
let ArchiveIcon = styled(Archive)`
  width: 20px;
  stroke-width: 2;
  padding: 0 15px;
`

let CallBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .swipeable-list-item__content {
    margin-bottom: 10px;
  }

  .swipeable-list-item {
    display: flex;
    align-items: center;
  }

  .swipeable-list-item__trailing-actions {
    height: 52.4px;
    margin-top: 1.73px;
  }
`

let CallDateStyle = styled.div`
  font-weight: 700;
  color: darkgrey;
  font-size: 0.6rem;
  position: relative;
  letter-spacing: 2px;
  margin-bottom: 10px;

  &:before {
    content: '';
    width: 150%;
    border-bottom: 1px dashed lightgrey;
    position: absolute;
    bottom: 3px;
    left: -180px;
  }

  &:after {
    content: '';
    width: 150%;
    border-bottom: 1px dashed lightgrey;
    position: absolute;
    bottom: 3px;
    right: -180px;
  }
`

let CallDetailStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 100%;
  padding: 10px 0;
  transition: box-shadow 0.2s ease, transform 0.07s ease, background-color 0.07s ease;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:hover {
    box-shadow: 1px 2px 5px #d5d5d5, -1px -2px 5px #ffffff;
  }
  &:active {
    background-color: rgb(245, 245, 245);
    transform: translateY(2px);
    box-shadow: none;
  }
`

let CallFromStyle = styled.div`
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  overflow-y: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

let PhoneOutcomingStyle = styled(TelephoneOutboundFill)`
  color: green;
  margin: 0 15px;
  min-width: 16px;
`

let PhoneIncomingStyle = styled(TelephoneInboundFill)`
  color: green;
  margin: 0 15px;
  min-width: 16px;
`

let PhoneMissedStyle = styled(TelephoneXFill)`
  color: red;
  margin: 0 15px;
  min-width: 16px;
`

let VoicemailStyle = styled(Voicemail)`
  color: blue;
  margin: 0 15px;
  min-width: 16px;
`

let CallViaStyle = styled.div`
  color: darkgray;
  font-weight: 500;
  padding-top: 4px;
  font-size: 12px;
`

let CallTimeStyle = styled.div`
  display: flex;
  font-weight: 700;
  color: darkgray;
  font-size: 12px;

  #ampm {
    border: 1px solid lightgrey;
    padding: 3px 5px;
    border-right: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 10px;
  }

  #time {
    display: flex;
    padding-right: 4px;
    padding-left: 5px;
    align-items: center;
  }
`

let ThreeDotVertStyle = styled(MoreVertical)`
  margin-left: auto;
  color: darkgrey;
  min-width: 16px;
  border: none;
  background-color: transparent;
  box-shadow: none;
`

let UndoStyle = styled(Undo)`
  padding: 0 15px;
`

let ArchiveSwipeStyle = styled.div`
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  box-sizing: border-box;
  align-items: center;
  padding: 8px;

  color: rgb(238, 238, 238);
  user-select: none;
  border-radius: 10px;
  ${(props) => (props.isArchived ? 'background-color: #147EFB;' : 'background-color: #FECB2E;')}
`

let ArchiveSwitchStyle = styled.div`
  border: 1px solid lightgrey;
  border-bottom: none;
  background-color: rgb(250, 250, 250);
  position: relative;
  border-top-left-radius: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;

  #btn {
    ${(props) => (props.seeArchive ? 'left: 152px;' : 'left: 10px;')}
    top: 0;
    position: absolute;
    width: 30%;
    height: 5px;
    background-color: #ff4500;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: 0.2s;
    z-index: 2;
  }
`

let ActivitySwitchBtnStyle = styled.button`
  color: rgba(51, 51, 51, 0.5);
  transition: color 0.1s;
  font-weight: 700;
  ${(props) => !props.seeArchive && 'color: #484848;'}
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  text-align: center;
  height: 100%;
  font-size: 14px;
  padding-left: 20px;
  height: 55px;
  transform: translateY(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`

let ArchiveSwitchBtnStyle = styled.button`
  color: rgba(51, 51, 51, 0.5);
  transition: color 0.1s;
  font-weight: 700;
  ${(props) => props.seeArchive && 'color: #484848;'}
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  text-align: center;
  height: 100%;
  font-size: 14px;
  height: 55px;
  transform: translateY(10px);
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`
let ArchiveUndoStyle = styled.div`
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`
let CallFromWrappedStyle = styled.div`
  display: flex;
`
let CallDetailDateStyle = styled.div`
  display: flex;
  span {
    margin-left: 5px;
  }
`

let CallDetailBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
  * {
    margin-top: 10px;
  }
`

let DurationStyle = styled.div``
export {
  ArchiveIcon,
  CallBoxStyle,
  CallDateStyle,
  CallDetailStyle,
  CallFromStyle,
  PhoneOutcomingStyle,
  PhoneIncomingStyle,
  PhoneMissedStyle,
  VoicemailStyle,
  CallViaStyle,
  CallTimeStyle,
  ThreeDotVertStyle,
  ArchiveSwipeStyle,
  UndoStyle,
  ArchiveSwitchStyle,
  ActivitySwitchBtnStyle,
  ArchiveSwitchBtnStyle,
  ArchiveUndoStyle,
  CallFromWrappedStyle,
  CallDetailDateStyle,
  CallDetailBoxStyle,
  DurationStyle,
}
