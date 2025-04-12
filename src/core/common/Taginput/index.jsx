import React from "react";
import { TagsInput } from "react-tag-input-component";
import PropTypes from "prop-types";

const CommonTagsInput = ({
    value,
    onChange,
    placeholder = "Add a tag", // Default placeholder
    className = "input-tags form-control", // Default class
}) => {
    return (
        <TagsInput
            value={value}
            onChange={onChange}
            placeHolder={placeholder}
            className={className}
        />
    );
};
CommonTagsInput.propTypes = {
    value: PropTypes.array.isRequired,      // Expecting an array of tags
    onChange: PropTypes.func.isRequired,    // Expecting a function for updates
    placeholder: PropTypes.string,          // Optional string
    className: PropTypes.string             // Optional string
};
export default CommonTagsInput;
