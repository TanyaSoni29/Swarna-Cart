import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../Router/all_routes";
import { DatePicker } from "antd";
import Addunits from "../../core/modals/inventory/addunits";
import AddCategory from "../../core/modals/inventory/addcategory";
import AddBrand from "../../core/modals/addbrand";
import {
  ArrowLeft,
  Calendar,
  Image,
  LifeBuoy,
  List,
  Plus,
  PlusCircle,
  X,
} from "feather-icons-react/build/IconComponents";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import CounterThree from "../../core/common/counter/counterThree";
import RefreshIcon from "../../core/common/tooltip-content/refresh";
import CollapesIcon from "../../core/common/tooltip-content/collapes";
import AddVariant from "../../core/modals/inventory/addvariant";
import AddVarientNew from "../../core/modals/inventory/addVarientNew";
import CommonTagsInput from "../../core/common/Taginput";
import TextEditor from "./texteditor";

const EditProduct = () => {
  const route = all_routes;
  const [tags, setTags] = useState(["Red", "Black"]);
  const [product, setProduct] = useState(false);
  const [product2, setProduct2] = useState(true);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
 
  const store = [
    { value: "thomas", label: "Thomas" },
    { value: "rasmussen", label: "Rasmussen" },
    { value: "fredJohn", label: "Fred John" },
  ];
  const warehouse = [
    { value: "legendary", label: "Legendary" },
    { value: "determined", label: "Determined" },
    { value: "sincere", label: "Sincere" },
  ];
  const category = [
    { value: "lenovo", label: "Lenovo" },
    { value: "electronics", label: "Electronics" },
  ];
  const subcategory = [
    { value: "lenovo", label: "Lenovo" },
    { value: "electronics", label: "Electronics" },
  ];

  const brand = [
    { value: "nike", label: "Nike" },
    { value: "bolt", label: "Bolt" },
  ];
  const unit = [
    { value: "kg", label: "Kg" },
    { value: "pc", label: "Pc" },
  ];
  const sellingtype = [
    { value: "transactionalSelling", label: "Transactional selling" },
    { value: "solutionSelling", label: "Solution selling" },
  ];
  const barcodesymbol = [
    { value: "code34", label: "Code34" },
    { value: "code35", label: "Code35" },
    { value: "code36", label: "Code36" },
  ];
  const taxtype = [
    { value: "exclusive", label: "Exclusive" },
    { value: "salesTax", label: "Sales Tax" },
  ];
  const discounttype = [
    { value: "choose", label: "Choose" },
    { value: "percentage", label: "Percentage" },
    { value: "cash", label: "Cash" },
  ];
  const discounttype1 = [
    { value: "percentage", label: "Percentage" },
    { value: "cash", label: "Cash" },
  ];
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleRemoveProduct = () => {
    setIsImageVisible(false);
  };
  const [isImageVisible1, setIsImageVisible1] = useState(true);

  const handleRemoveProduct1 = () => {
    setIsImageVisible1(false);
  };
  return (
    <>
      
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>New Product</h4>
              <h6>Create new product</h6>
            </div>
          </div>
          <ul className="table-top-head">
          <RefreshIcon/>
          <CollapesIcon/>
            <li>
              <div className="page-btn">
                <Link to={route.productlist} className="btn btn-secondary">
                  <ArrowLeft className="me-2" />
                  Back to Product
                </Link>
              </div>
            </li>
            
          </ul>
        </div>
        {/* /add */}
        <form>
        <div className="card mb-0">
            <div className="card-body add-product pb-0">
              <div className="accordions-items-seperate" id="accordionSpacingExample">
                <div className="accordion-item border mb-4">
                  <h2 className="accordion-header" id="headingSpacingOne">
                    <div
                      className="accordion-button collapsed bg-white"
                      data-bs-toggle="collapse"
                      data-bs-target="#SpacingOne"
                      aria-expanded="true"
                      aria-controls="SpacingOne"
                    >
                      <div className="d-flex align-items-center justify-content-between flex-fill">
                        <h5 className="d-flex align-items-center">
                          <i data-feather="info" className="text-primary me-2" />
                          <span>Product Information</span>
                        </h5>
                      </div>
                    </div>
                  </h2>
                  <div
                    id="SpacingOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingSpacingOne"
                  >
                    <div className="accordion-body border-top">
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Store<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={store}
                              defaultValue={store[1]}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Warehouse<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={warehouse}
                              defaultValue={warehouse[2]}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Product Name<span className="text-danger ms-1">*</span>
                            </label>
                            <input type="text" defaultValue={'Lenovo 3rd Generation'} className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Slug<span className="text-danger ms-1">*</span>
                            </label>
                            <input type="text" defaultValue={'computers'} className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <div className="mb-3 list position-relative">
                            <label className="form-label">
                              SKU<span className="text-danger ms-1">*</span>
                            </label>
                            <input type="text" defaultValue={'LNV-IP3-8GB-256SSD-BLK'} className="form-control list" />
                            <button type="button" className="btn btn-primaryadd">
                              Generate
                            </button>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Selling Type<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                                classNamePrefix="react-select"
                                options={sellingtype}
                                defaultValue={sellingtype[0]}
                                placeholder="Choose"
                              />
                          </div>
                        </div>
                      </div>
                      <div className="addservice-info">
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <div className="add-newplus">
                                <label className="form-label">
                                  Category<span className="text-danger ms-1">*</span>
                                </label>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-units-category"
                                >
                                  <PlusCircle
                                    data-feather="plus-circle"
                                    className="plus-down-add"
                                  />
                                  <span>Add New</span>
                                </Link>
                              </div>
                              <Select
                                classNamePrefix="react-select"
                                options={category}
                                defaultValue={category[0]}
                                placeholder="Choose"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Sub Category<span className="text-danger ms-1">*</span>
                              </label>
                              <Select
                                classNamePrefix="react-select"
                                options={subcategory}
                                defaultValue={subcategory[0]}
                                placeholder="Choose"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-product-new">
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <div className="add-newplus">
                                <label className="form-label">
                                  Brand<span className="text-danger ms-1">*</span>
                                </label>
                              </div>
                              <Select
                                classNamePrefix="react-select"
                                options={brand}
                                defaultValue={brand[0]}
                                placeholder="Choose"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <div className="add-newplus">
                                <label className="form-label">
                                  Unit<span className="text-danger ms-1">*</span>
                                </label>
                              </div>
                              <Select
                                classNamePrefix="react-select"
                                options={unit}
                                defaultValue={unit[0]}
                                placeholder="Choose"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Barcode Symbology<span className="text-danger ms-1">*</span>
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              options={barcodesymbol}
                              defaultValue={barcodesymbol[0]}
                              placeholder="Choose"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="mb-3 list position-relative">
                            <label className="form-label">
                              Item Code<span className="text-danger ms-1">*</span>
                            </label>
                            <input type="text" defaultValue={'PT001'} className="form-control list" />
                            <button type="submit" className="btn btn-primaryadd">
                              Generate
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Editor */}
                      <div className="col-lg-12">
                        <div className="summer-description-box">
                          <label className="form-label">Description</label>
                          <TextEditor />
                          <p className="fs-14 mt-1">Maximum 60 Words</p>
                        </div>
                      </div>
                      {/* /Editor */}
                    </div>
                  </div>
                </div>
                <div className="accordion-item border mb-4">
                  <h2 className="accordion-header" id="headingSpacingTwo">
                    <div
                      className="accordion-button collapsed bg-white"
                      data-bs-toggle="collapse"
                      data-bs-target="#SpacingTwo"
                      aria-expanded="true"
                      aria-controls="SpacingTwo"
                    >
                      <div className="d-flex align-items-center justify-content-between flex-fill">
                        <h5 className="d-flex align-items-center">
                          <LifeBuoy data-feather="life-buoy" className="text-primary me-2" />
                          <span>Pricing &amp; Stocks</span>
                        </h5>
                      </div>
                    </div>
                  </h2>
                  <div
                    id="SpacingTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingSpacingTwo"
                  >
                    <div className="accordion-body border-top">
                      <div className="mb-3s">
                        <label className="form-label">
                          Product Type<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="single-pill-product mb-3">
                          <ul className="nav nav-pills" id="pills-tab1" role="tablist">
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio me-4 mb-0 active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="payment"
                                />
                                <span className="checkmark" /> Single Product
                              </span>
                            </li>
                            <li className="nav-item" role="presentation">
                              <span
                                className="custom_radio me-2 mb-0"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                <input
                                  type="radio"
                                  className="form-control"
                                  name="sign"
                                />
                                <span className="checkmark" /> Variable Product
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="single-product">
                            <div className="row">
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Quantity<span className="text-danger ms-1">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Price<span className="text-danger ms-1">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Tax Type<span className="text-danger ms-1">*</span>
                                  </label>
                                  <Select
                                  classNamePrefix="react-select"
                                  options={taxtype}
                                  defaultValue={taxtype[0]}
                                  placeholder="Select Option"
                                />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Discount Type
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                  <Select
                                  classNamePrefix="react-select"
                                  options={discounttype}
                                  defaultValue={discounttype[0]}
                                  placeholder="Choose"
                                />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Discount Value
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Quantity Alert
                                    <span className="text-danger ms-1">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="row select-color-add">
                            <div className="col-lg-6 col-sm-6 col-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Variant Attribute{" "}
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <div className="row">
                                  <div className="col-lg-10 col-sm-10 col-10">
                                    <select
                                      className="form-control variant-select select-option"
                                      id="colorSelect"
                                      onChange={()=>setProduct(true)}
                                    >
                                      <option>Choose</option>
                                      <option>Color</option>
                                      <option value="red">Red</option>
                                      <option value="black">Black</option>
                                    </select>
                                  </div>
                                  <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                    <div className="add-icon tab">
                                      <Link
                                        className="btn btn-filter"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-units"
                                      >
                                        <i className="feather feather-plus-circle" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {product && 
                                <div className={`selected-hide-color ${product2 ? 'd-block':''} `} id="input-show">
                                <label className="form-label">
                                  Variant Attribute{" "}
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <div className="row align-items-center">
                                  <div className="col-lg-10 col-sm-10 col-10">
                                    <div className="mb-3">
                                      
                                      <CommonTagsInput
                                          value={tags}
                                          onChange={setTags}
                                          placeholder="Add new"
                                          className="input-tags form-control" // Optional custom class
                                        />
                                    </div>
                                  </div>
                                  <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                    <div className="mb-3 ">
                                      <Link
                                        to="#"
                                        className="remove-color"
                                        onClick={()=>setProduct2(false)}
                                      >
                                        <i className="far fa-trash-alt" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>}
                              
                            </div>
                          </div>
                          {product && 
                            <div
                            className="modal-body-table variant-table d-block"
                            id="variant-table"
                            
                          >
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Variantion</th>
                                    <th>Variant Value</th>
                                    <th>SKU</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th className="no-sort" />
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="color"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="red"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue={1234}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                    <CounterThree defaultValue={2}/>
                                    </td>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue={50000}
                                        />
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <div className="input-block add-lists">
                                          <label className="checkboxs">
                                            <input type="checkbox" defaultChecked="" />
                                            <span className="checkmarks" />
                                          </label>
                                        </div>
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add-variation"
                                        >
                                          <Plus
                                            data-feather="plus"
                                            className="feather-edit"
                                          />
                                        </Link>
                                        <Link
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                          className="p-2"
                                          to="#"
                                        >
                                          <i
                                            data-feather="trash-2"
                                            className="feather-trash-2"
                                          />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="color"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue="black"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue={2345}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <CounterThree defaultValue={2}/>
                                    </td>
                                    <td>
                                      <div className="add-product">
                                        <input
                                          type="text"
                                          className="form-control"
                                          defaultValue={50000}
                                        />
                                      </div>
                                    </td>
                                    <td className="action-table-data">
                                      <div className="edit-delete-action">
                                        <div className="input-block add-lists">
                                          <label className="checkboxs">
                                            <input type="checkbox" defaultChecked="" />
                                            <span className="checkmarks" />
                                          </label>
                                        </div>
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-units"
                                        >
                                          <Plus
                                            data-feather="plus"
                                            className="feather-edit"
                                          />
                                        </Link>
                                        <Link
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                          className="p-2"
                                          to="#"
                                        >
                                          <i
                                            data-feather="trash-2"
                                            className="feather-trash-2"
                                          />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          }
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border mb-4">
                  <h2 className="accordion-header" id="headingSpacingThree">
                    <div
                      className="accordion-button collapsed bg-white"
                      data-bs-toggle="collapse"
                      data-bs-target="#SpacingThree"
                      aria-expanded="true"
                      aria-controls="SpacingThree"
                    >
                      <div className="d-flex align-items-center justify-content-between flex-fill">
                        <h5 className="d-flex align-items-center">
                          <Image data-feather="image" className="text-primary me-2" />
                          <span>Images</span>
                        </h5>
                      </div>
                    </div>
                  </h2>
                  <div
                    id="SpacingThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingSpacingThree"
                  >
                    <div className="accordion-body border-top">
                      <div className="text-editor add-list add">
                        <div className="col-lg-12">
                          <div className="add-choosen">
                            <div className="mb-3">
                              <div className="image-upload">
                                <input type="file" />
                                <div className="image-uploads">
                                  <PlusCircle
                                    data-feather="plus-circle"
                                    className="plus-down-add me-0"
                                  />
                                  <h4>Add Images</h4>
                                </div>
                              </div>
                            </div>
                            {isImageVisible1 && (
                              <div className="phone-img">
                                <ImageWithBasePath
                                  src="assets/img/products/phone-add-2.png"
                                  alt="image"
                                />
                                <Link to="#">
                                  <X
                                    className="x-square-add remove-product"
                                    onClick={handleRemoveProduct1}
                                  />
                                </Link>
                              </div>
                            )}
                            {isImageVisible && (
                              <div className="phone-img">
                                <ImageWithBasePath
                                  src="assets/img/products/phone-add-1.png"
                                  alt="image"
                                />
                                <Link to="#">
                                  <X
                                    className="x-square-add remove-product"
                                    onClick={handleRemoveProduct}
                                  />
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border mb-4">
                  <h2 className="accordion-header" id="headingSpacingFour">
                    <div
                      className="accordion-button collapsed bg-white"
                      data-bs-toggle="collapse"
                      data-bs-target="#SpacingFour"
                      aria-expanded="true"
                      aria-controls="SpacingFour"
                    >
                      <div className="d-flex align-items-center justify-content-between flex-fill">
                        <h5 className="d-flex align-items-center">
                          <List data-feather="list" className="text-primary me-2" />
                          <span>Custom Fields</span>
                        </h5>
                      </div>
                    </div>
                  </h2>
                  <div
                    id="SpacingFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingSpacingFour"
                  >
                    <div className="accordion-body border-top">
                      <div className="p-3 rounded bg-light-900 d-flex align-items-center pb-0 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="input-block add-lists">
                            <label className="checkboxs me-3">
                              <input type="checkbox" />
                              <span className="checkmarks" />
                              Warranties
                            </label>
                            <label className="checkboxs me-3">
                              <input type="checkbox" />
                              <span className="checkmarks" />
                              Manufacturer
                            </label>
                            <label className="checkboxs me-3">
                              <input type="checkbox" />
                              <span className="checkmarks" />
                              Expiry
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Warranty<span className="text-danger ms-1">*</span>
                              </label>
                              <Select
                              classNamePrefix="react-select"
                              options={discounttype1}
                              defaultValue={discounttype1[0]}
                              placeholder="Choose"
                            />
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">
                                Manufacturer<span className="text-danger ms-1">*</span>
                              </label>
                              <input type="text" defaultValue={'Lenovo'} className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Manufactured Date
                                <span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon calender-input">
                                <Calendar data-feather="calendar" className="info-img" />
                                <DatePicker
                                  selected={selectedDate}
                                  onChange={handleDateChange}
                                  type="date"
                                  className="datetimepicker"
                                  dateFormat="dd-MM-yyyy"
                                  placeholder="Choose Date"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Expiry On<span className="text-danger ms-1">*</span>
                              </label>
                              <div className="input-groupicon calender-input">
                                <Calendar data-feather="calendar" className="info-img" />
                                <DatePicker
                                  selected={selectedDate1}
                                  onChange={handleDateChange1}
                                  type="date"
                                  className="datetimepicker"
                                  dateFormat="dd-MM-yyyy"
                                  placeholder="Choose Date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="btn-addproduct mb-4">
              <button type="button" className="btn btn-cancel me-2">
                Cancel
              </button>
              <Link to={route.addproduct} className="btn btn-submit">
                Save Product
              </Link>
            </div>
          </div>
        </form>
        {/* /add */}
      </div>
     
    </div>
    <Addunits />
      <AddCategory />
      <AddVariant/>
      <AddBrand />
      <AddVarientNew/>
      <div className="modal fade" id="delete-modal">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="page-wrapper-new p-0">
					<div className="content p-5 px-3 text-center">
							<span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i className="ti ti-trash fs-24 text-danger"></i></span>
							<h4 className="fs-20 fw-bold mb-2 mt-1">Delete Attribute</h4>
							<p className="mb-0 fs-16">Are you sure you want to delete Attribute?</p>
							<div className="modal-footer-btn mt-3 d-flex justify-content-center">
								<button type="button" className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="button" className="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
							</div>						
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  );
};

export default EditProduct;
