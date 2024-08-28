import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { getUserType } from "../../utils/helpers";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/alltask/", state: "alltaskmenu" },
      { path: "/mytask/", state: "mytaskmenu" },
      { path: "/inprogess/", state: "inprogessmenu" },
      { path: "/devready/", state: "devreadymenu" },
      { path: "/completed/", state: "completedmenu" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas shadow-lg" id="sidebar">
        <ul className="nav">
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="fa fa-dashboard"></i>
              <span className="menu-title ml-3">Dashboard</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/alltask") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.alltaskmenu ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("alltaskmenu")}
              data-toggle="collapse"
            >
              <i className="	fa fa-archive"></i>
              <span className="menu-title ml-3">All tasks</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.alltaskmenu}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/alltask/alltask-management")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/alltask/alltask-management"
                  >
                    All tasks
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/mytask") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.mytaskmenu ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("mytaskmenu")}
              data-toggle="collapse"
            >
              <i className="	fa fa-archive"></i>
              <span className="menu-title ml-3 ml-3">My tasks</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.mytaskmenu}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/mytask/mytask-management")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/mytask/mytask-management"
                  >
                    My tasks
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/devready") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.devreadymenu ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("devreadymenu")}
              data-toggle="collapse"
            >
              <i className="	fa fa-archive"></i>
              <span className="menu-title ml-3">Dev Ready</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.devreadymenu}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/devready/devready-management")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/devready/devready-management"
                  >
                    Dev Ready
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/inprogess") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.inprogessmenu ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("inprogessmenu")}
              data-toggle="collapse"
            >
              <i className="	fa fa-archive"></i>
              <span className="menu-title ml-3">In Progess</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.inprogessmenu}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/inprogess/inprogess-management")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/inprogess/inprogess-management"
                  >
                    In Progess
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/completed") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.completedmenu ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("completedmenu")}
              data-toggle="collapse"
            >
              <i className="	fa fa-archive"></i>
              <span className="menu-title ml-3">Completed</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.completedmenu}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/completed/completed-management")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/completed/completed-management"
                  >
                    Completed
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
