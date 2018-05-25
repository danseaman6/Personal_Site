import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <li className="tab">
      <a
        className={`tab-link ${props.linkClassName} ${
          props.isActive ? "active" : ""
        }`}
        onClick={event => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}
      >
        <i className={`tab-icon $props.iconClassName}`} />
      </a>
    </li>
  );
};

Tab.propTypes = {
  linkClassName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

export default Tab;
