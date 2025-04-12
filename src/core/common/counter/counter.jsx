import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
const CartCounter = () => {
  const [quantity, setQuantity] = useState(0); // Default state is 0

  const handleIncrement = () => {
    if (quantity < 99) {
      // Optional: Maximum limit
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      // Prevent going below 0
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = parseInt(value, 10);

    // Allow empty input temporarily for manual edits
    if (value === "") {
      setQuantity(0); // Reset to 0 if input is empty
    } else if (
      !isNaN(numericValue) &&
      numericValue >= 0 &&
      numericValue <= 99
    ) {
      setQuantity(numericValue); // Update state with valid numbers
    }
  };

  return (
    <>
    <Tooltip title='minus'>
      <Link
        to="#"
        className="dec d-flex justify-content-center align-items-center"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="minus"
        onClick={handleDecrement}
      >
        <i className="ti ti-minus" />
      </Link>
      </Tooltip>
      <input
        type="text"
        className="form-control text-center"
        name="qty"
        value={quantity.toString()} // Convert number to string for input
        onChange={handleChange} // Allow manual edits
      />
      <Tooltip title='plus'>
      <Link
        to="#"
        className="inc d-flex justify-content-center align-items-center"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="plus"
        onClick={handleIncrement}
      >
        <i className="ti ti-plus" />
      </Link>
      </Tooltip>
      
    </>
  );
};
CartCounter.propTypes = {
  defaultValue: PropTypes.number,
};
export default CartCounter;
