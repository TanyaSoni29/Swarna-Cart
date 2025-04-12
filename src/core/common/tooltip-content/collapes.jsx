import React from 'react'
import { Link } from "react-router-dom";
import { Tooltip } from 'antd';
import { setToogleHeader } from '../../redux/action';
import { useSelector,useDispatch } from 'react-redux';

const CollapesIcon = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.toggle_header);
  return (
    <li className='collapse-icons'>
    <Tooltip title="Collapse">
    <Link
      to="#"
      id='collapse-header'
      className={`${data ? 'active' : ''}`}
        onClick={() => {
            dispatch(setToogleHeader(!data));
        }}
    >
    <i className="ti ti-chevron-up"></i>
    </Link>
    </Tooltip>
  </li>
  )
}

export default CollapesIcon