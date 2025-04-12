/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Table } from "antd";

const Datatable = ({ props, columns, dataSource }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = dataSource.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredDataSource(filteredData);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <div className="search-set table-search-set">
  <div className="search-input">
    <a href="#" className="btn btn-searchset">
      <i className="ti ti-search fs-14 feather-search" />
    </a>
    <div id="DataTables_Table_0_filter" className="dataTables_filter">
      <label>
        {" "}
        <input
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
          className="form-control form-control-sm"
          placeholder="Search"
          aria-controls="DataTables_Table_0"
        />
      </label>
    </div>
  </div>
</div>


    <Table
      key={props}
      className="table datanew dataTable no-footer"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={filteredDataSource}
      rowKey={(record) => record.id}
      pagination={{
          locale: { items_per_page: "" },
          nextIcon: <span><i className="fa fa-angle-right" /></span>,
          prevIcon: <span><i className="fa fa-angle-left" /></span>,
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
    />
        </>
  );
};

export default Datatable;
