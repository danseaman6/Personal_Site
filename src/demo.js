import React from "react";
import PropTypes from "prop-types";

const Demo = props => {
  return (
    <div>
      <h3>{props.dstring}</h3>
    </div>
  )
};

Demo.propTypes = {
  dstring : PropTypes.string.isRequired
};

export default Demo;