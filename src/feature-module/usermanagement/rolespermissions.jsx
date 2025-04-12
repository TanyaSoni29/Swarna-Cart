import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusCircle } from "react-feather";

import Table from "../../core/pagination/datatable";
import AddRole from "../../core/modals/usermanagement/addrole";
import EditRole from "../../core/modals/usermanagement/editrole";
import { all_routes } from "../../Router/all_routes";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
// import { all_routes } from "../../Router/all_routes";

const RolesPermissions = () => {
  const route = all_routes;
  const dataSource = useSelector((state) => state.rootReducer.rolesandpermission_data);
  const columns = [
    {
      title: "Role Name",
      dataIndex: "rolename",
      sorter: (a, b) => a.rolename.length - b.rolename.length,
    },
    {
      title: "Created On",
      dataIndex: "createdon",
      sorter: (a, b) => a.createdon.length - b.createdon.length,
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link className="me-2 p-2" to={route.permissions}>
              <i
                data-feather="sheild"
                className="feather feather-shield shield"
              ></i>
            </Link>
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_role"
            >
              <i data-feather="edit" className="feather-edit"></i>
            </Link>

            <Link className="confirm-text p-2" to="#">
              <i
                data-feather="trash-2"
                className="feather-trash-2"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
              ></i>
            </Link>
          </div>
        </div>
      ),
    },
  ];


  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Roles & Permission</h4>
                <h6>Manage your roles</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
                <PlusCircle className=" feather me-2" />
                Add Role
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set">

              </div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
              
              </div>
            </div>

            <div className="card-body">

              <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <AddRole />
      <EditRole />
      <>
        {/* Delete Product */}
        <div className="modal fade modal-default" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="success-wrap text-center">
                  <form action="roles-permissions.html">
                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                      <i className="ti ti-trash" />
                    </div>
                    <h3 className="mb-2">Delete Role</h3>
                    <p className="fs-16 mb-3">
                      Are you sure you want to delete role?
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                      <button
                        type="button"
                        className="btn btn-md btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No, Cancel
                      </button>
                      <button type="button" className="btn btn-md btn-primary">
                        Yes, Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Product */}
      </>

    </div>
  );
};

export default RolesPermissions;
