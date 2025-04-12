import React from "react";
import { Link } from "react-router-dom";
import { Edit, Eye, Trash2 } from "react-feather";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { useSelector } from "react-redux";
import Table from "../../core/pagination/datatable";
import SupplierModal from "../../core/modals/peoples/supplierModal";
import TooltipIcons from "../../core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";

const Suppliers = () => {
  const data = useSelector((state) => state.rootReducer.supplierdata);


  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
      render: (text, record) => (
        <span className="productimgname">
          <Link to="#" className="avatar avatar-md me-2">
            <ImageWithBasePath alt="" src={record.image} className="img-fluid rounded-2" />
          </Link>
          <Link to="#">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.supplierName.length - b.supplierName.length,
    },


    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },

    {
      title: "Country",
      dataIndex: "country",
      sorter: (a, b) => a.country.length - b.country.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <>
          <span className={`badge  d-inline-flex align-items-center badge-xs ${text === 'Active' ? 'badge-success' : 'badge-danger'}`}>
            <i className="ti ti-point-filled me-1" />
            {text}
          </span>
        </>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },

    {
      title: "",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <div className="input-block add-lists"></div>

            <Link className="me-2 p-2" to="#">
              <Eye className="feather-view" />
            </Link>

            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal" data-bs-target="#edit-supplier"
            >
              <Edit className="feather-edit" />
            </Link>

            <Link
              className="confirm-text p-2"
              to="#" data-bs-toggle="modal" data-bs-target="#delete-modal"
            >
              <Trash2 className="feather-trash-2" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.createdby.length - b.createdby.length,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Suppliers</h4>
                <h6>Manage your suppliers</h6>
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
                data-bs-target="#add-supplier"
              >
              <i className='ti ti-circle-plus me-1'></i>
                Add Supplier
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
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        New Joiners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <Table
                  className="table datanew"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>d
      </div>
      <SupplierModal />
    </>

  );
};

export default Suppliers;
