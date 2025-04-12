import React from 'react'
import PosHeader from '../feature-module/pos/posHeader'
import { Outlet } from 'react-router-dom'
import ThemeSettings from '../InitialPage/themeSettings'

const PosLayout = () => {
  return (
    <>
        <PosHeader />
        <Outlet />
        <ThemeSettings />
    </>
  )
}

export default PosLayout