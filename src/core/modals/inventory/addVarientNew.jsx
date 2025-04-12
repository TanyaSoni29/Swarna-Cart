import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../img/imagewithbasebath'
import { X } from 'feather-icons-react/build/IconComponents'
import Select from "react-select";

const AddVarientNew = () => {
    const barcodesymbol = [
        { value: "choose", label: "Choose" },
        { value: "code34", label: "Code34" },
        { value: "code35", label: "Code35" },
        { value: "code36", label: "Code36" },
      ];
      const taxtype = [
        { value: "exclusive", label: "Exclusive" },
        { value: "salesTax", label: "Sales Tax" },
      ];
      const tax = [
        { value: "exclusive", label: "Direct" },
        { value: "salesTax", label: "InDirect" },
      ];
      const discounttype = [
        { value: "choose", label: "Choose" },
        { value: "percentage", label: "Percentage" },
        { value: "cash", label: "Cash" },
      ];
  return (
    <div className="modal fade" id="add-variation">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <div className="page-title">
          <h4>Add Variant</h4>
        </div>
        <button
          type="button"
          className="close bg-danger text-white fs-16"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="modal-title-head people-cust-avatar">
          <h6>Variant Thumbnail</h6>
        </div>
        <div className="new-employee-field">
          <div className="profile-pic-upload">
            <div className="profile-pic">
              <span>
                <i data-feather="plus-circle" className="plus-down-add" /> Add
                Image
              </span>
            </div>
            <div className="mb-3">
              <div className="image-upload mb-0">
                <input type="file" />
                <div className="image-uploads">
                  <h4>Upload Image</h4>
                </div>
              </div>
              <p className="mt-2">JPEG, PNG up to 2 MB</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 pe-0">
            <div className="mb-3">
              <label className="form-label">
                Barcode Symbology<span className="text-danger ms-1">*</span>
              </label>
              <Select
                classNamePrefix="react-select"
                options={barcodesymbol}
                placeholder="Choose"
            />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <div className="mb-3 add-product list position-relative">
                <label className="form-label">
                  Item Code<span className="text-danger ms-1">*</span>
                </label>
                <input
                  type="text"
                  className="form-control list"
                  defaultValue=""
                />
                <button type="submit" className="btn btn-primaryadd">
                  Generate
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mb-3 image-upload-down">
              <div className="image-upload download">
                <input type="file" />
                <div className="image-uploads">
                  <ImageWithBasePath src="assets/img/download-img.png" alt="img" />
                  <h4>
                    Drag and drop a <span>file to upload</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="accordion-body">
              <div className="text-editor add-list add">
                <div className="col-lg-12">
                  <div className="add-choosen mb-3">
                    <div className="phone-img ms-0">
                      <ImageWithBasePath src="assets/img/products/laptop.png" alt="image" />
                      <Link to="#">
                        <X
                          data-feather="x"
                          className="x-square-add remove-product"
                        />
                      </Link>
                    </div>
                    <div className="phone-img">
                      <ImageWithBasePath src="assets/img/products/laptop-2.png" alt="image" />
                      <Link to="#">
                        <X
                          data-feather="x"
                          className="x-square-add remove-product"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Quantity<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Quantity Alert<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Tax Type<span className="text-danger ms-1">*</span>
              </label>
              <Select
                classNamePrefix="react-select"
                options={tax}
                placeholder="Choose"
            />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Tax<span className="text-danger ms-1">*</span>
              </label>
              <Select
                classNamePrefix="react-select"
                options={taxtype}
                placeholder="Choose"
            />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Discount Type<span className="text-danger ms-1">*</span>{" "}
              </label>
              <Select
                classNamePrefix="react-select"
                options={discounttype}
                placeholder="Choose"
            />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label className="form-label">
                Discount Value<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <Link
          to="#"
          className="btn me-1 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
          data-bs-dismiss="modal"
        >
          Cancel
        </Link>
        <Link
          to="#"
          className="btn btn-primary fs-13 fw-medium p-2 px-3"
        >
          Submit
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default AddVarientNew