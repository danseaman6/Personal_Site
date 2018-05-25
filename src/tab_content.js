import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "tab";

class TabContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick = tabIndex => {
    this.setState({
      activeTabIndex:
        tabIndex === this.state.activeTabIndex
          ? this.props.defaultActiveTabIndex
          : tabIndex
    });
  };

  renderChildrenWithTabsApiAsProps = () => {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  };

  renderActiveTabContent = () => {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  };

  render() {
    return (
      <div className="tab-content">
        <ul className="tabs-nav nav navbar-nav navbar-left">
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <div className={"tabs-active-content"}>
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}

TabContent.propTypes = {
  defaultActiveTabIndex: PropTypes.Number,
  children: PropTypes.array.isRequired
};

TabContent.defaultProps = {
  defaultActiveTabIndex: 0
};

export default TabContent;
