import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  //Manual Collapse for bootstrap
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    
    const index = location.pathname === "/" ? "active" : "";
    const visitas = location.pathname.match(/^\/visitas/) ? "active" : "";
    const statistics = location.pathname.match(/^\/statistics/) ? "active" : "";
    
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default row">
          <div class="navbar-header row">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass}>
            <ul class="nav navbar-nav">
              <li class={index}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={visitas}>
                <Link to="visitas" onClick={this.toggleCollapse.bind(this)}>Visitas</Link>
              </li>
              <li class={statistics}>
                <Link to="statistics" onClick={this.toggleCollapse.bind(this)}>Statistics</Link>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}