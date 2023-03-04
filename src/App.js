import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useGetAllCallListsQuery } from './store/api'

import Header from './components/Header'
import ActivityFeed from './components/ActivityFeed'
import ArchiveView from './components/ArchiveView'
import ControlBar from './components/ControlBar'
import ActivityDetail from './components/ActivityDetail'

import './scss/body.scss'
import './scss/app.scss'
import './scss/header.scss'

export default function App() {
  const [seeArchive, setSeeArchive] = useState(false)

  const { isLoading, isError, error } = useGetAllCallListsQuery()

  if (isError) {
    return <div>Error: {error}</div>
  } else if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div id="app">
        <BrowserRouter>
          <div className="container">
            <Header setSeeArchive={setSeeArchive} seeArchive={seeArchive} />
            <div className="container-view">
              <Routes>
                <Route path="/" element={<Navigate to="activity" />} />
                <Route path="/activity" element={<ActivityFeed />} />
                <Route path="/archive" element={<ArchiveView />} />
                <Route path="/detail/:id" element={<ActivityDetail />} />
              </Routes>
            </div>
            <ControlBar />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
