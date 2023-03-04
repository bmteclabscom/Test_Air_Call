import React, { useState, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import {
  ArchiveSwitchStyle,
  ActivitySwitchBtnStyle,
  ArchiveSwitchBtnStyle,
  ThreeDotVertStyle,
} from './style'

export const ArchiveSwitch = () => {
  const [ seeArchive, setSeeArchive ] = useState(false)
  const [ seeDetail, setSeeDetail ] = useState(false)

  const url = useLocation()
  const navigate = useNavigate()

  const handleClickActivity = () => {
    navigate('/activity')
    setSeeArchive(false)
  }
  const handleClickArchive = () => {
    navigate('/archive')
    setSeeArchive(true)
  }
  useMemo(() => {
    if (url.pathname.includes('activity')) {
      setSeeArchive(false)
      setSeeDetail(false)
    } else if (url.pathname.includes('archive')) {
      setSeeArchive(true)
      setSeeDetail(false)
    } else {
      setSeeDetail(true)
    }
  }, [ url ])

  return (
    <>
      <ArchiveSwitchStyle seeArchive={seeArchive}>
        {!seeDetail && <div id="btn"></div>}
        <ActivitySwitchBtnStyle seeArchive={seeArchive} onClick={handleClickActivity}>
          Activity
        </ActivitySwitchBtnStyle>
        <ThreeDotVertStyle />
        <ArchiveSwitchBtnStyle seeArchive={seeArchive} onClick={handleClickArchive}>
          Archives
        </ArchiveSwitchBtnStyle>
      </ArchiveSwitchStyle>
    </>
  )
}
