import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropDown.css";

import { useSelector, useDispatch } from "react-redux";

const DropDown = ({ dropDownOptions, dropDownName, dropDownAction }) => {
  const value = useSelector((state) => state[dropDownName]);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    console.log(e);
    dispatch({ type: dropDownAction, payload: e });
  };

  return (
    <DropdownButton
      title={value}
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    >
      {dropDownOptions.map((option) => {
        return (
          <Dropdown.Item
            key={option}
            onClick={(e) => {
              console.log(e.target.parentNode);
            }}
            eventKey={option}
          >
            {option}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default DropDown;
