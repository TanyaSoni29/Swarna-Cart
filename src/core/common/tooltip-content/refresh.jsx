/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-const-assign */
import React from 'react'
import { Link } from "react-router-dom";
import { Tooltip } from 'antd';
const RefreshIcon = () => {
  return (

    <li>
      <Tooltip title="Refresh">
        <Link to="#">
          <i className="ti ti-refresh"></i>
        </Link>
      </Tooltip>
    </li>


  )
}

export default RefreshIcon