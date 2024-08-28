import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class SideBarStaff extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/editors', state: 'editorsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
      {path:'/service', state: 'serviceMenuOpen'},
      {path:'/package', state: 'packageMenuOpen'},
      {path:'/request', state: 'requestMenuOpen'},
      {path:'/vehicle', state: 'vehicleMenuOpen'},
      {path:'/location', state: 'locationMenuOpen'},
      {path:'/staff', state: 'staffMenuOpen'},
      {path:'/van/', state: 'vanMenuOpen'},
      {path:'/parts/', state: 'vanpartsOpen'},
      {path:'/workshop/', state: 'workshoppartsOpen'},
      {path:'/slot/', state: 'timeslotmenu'},
      {path:'/requisition/', state: 'customermenu'},
      {path:'/project/', state: 'projectmenu'},
      {path:'/client/', state: 'clientmenu'},
    ];
    

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas shadow-lg" id="sidebar">
        <ul className="nav">

          {/* <li className={ this.isPathActive('/slot/slot-management') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.timeslotmenu ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('timeslotmenu') } data-toggle="collapse">
              <i className="ti-eraser menu-icon"></i>
              <span className="menu-title">Time Slots</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.timeslotmenu }>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ this.isPathActive('/slot/slot-management') ? 'nav-link active' : 'nav-link' } to="/slot/slot-management">Slots</Link></li>
              </ul>
            </Collapse>
          </li> */}
   
          <li className={ this.isPathActive('/requisition') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.customermenu ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('customermenu') } data-toggle="collapse">
              <i className="ti-eraser menu-icon"></i>
              <span className="menu-title">Requisition</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.customermenu }>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ this.isPathActive('/requisition/requisition-management') ? 'nav-link active' : 'nav-link' } to="/requisition/requisition-management">Requisition</Link></li>
              {/* <li className="nav-item"> <Link className={ this.isPathActive('/requisition/stages') ? 'nav-link active' : 'nav-link' } to="/requisition/stages">Approvel Stages</Link></li> */}

                
              </ul>
            </Collapse>
          </li>
         
          {/* <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <i className="ti-layout menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table">Basic Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/data-table') ? 'nav-link active' : 'nav-link' } to="/tables/data-table">Data Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/react-table') ? 'nav-link active' : 'nav-link' } to="/tables/react-table">React Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/sortable-table') ? 'nav-link active' : 'nav-link' } to="/tables/sortable-table">Sortable Table</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="ti-layers-alt menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-2') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-2">Login 2</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-2') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-2">Register 2</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/lockscreen') ? 'nav-link active' : 'nav-link' } to="/user-pages/lockscreen">Lockscreen</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/apps') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.appsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('appsMenuOpen')} data-toggle="collapse">
              <i className="ti-layout menu-icon"></i>
              <span className="menu-title">Apps</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.appsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/apps/kanban-board') ? 'nav-link active' : 'nav-link' } to="/apps/kanban-board">Kanban Board</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/apps/todo-list') ? 'nav-link active' : 'nav-link' } to="/apps/todo-list">Todo List</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/apps/chats') ? 'nav-link active' : 'nav-link' } to="/apps/chats">Chats</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/apps/email') ? 'nav-link active' : 'nav-link' } to="/apps/email">E-mail</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/apps/calendar') ? 'nav-link active' : 'nav-link' } to="/apps/calendar">Calendar</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/apps/gallery') ? 'nav-link active' : 'nav-link' } to="/apps/gallery">Gallery</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="ti-palette menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/accordions') ? 'nav-link active' : 'nav-link' } to="/basic-ui/accordions">Accordions</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/badges') ? 'nav-link active' : 'nav-link' } to="/basic-ui/badges">Badges</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/breadcrumbs') ? 'nav-link active' : 'nav-link' } to="/basic-ui/breadcrumbs">Breadcrumbs</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns">Dropdowns</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/modals') ? 'nav-link active' : 'nav-link' } to="/basic-ui/modals">Modals</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/progressbar') ? 'nav-link active' : 'nav-link' } to="/basic-ui/progressbar">Progress bar</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/pagination') ? 'nav-link active' : 'nav-link' } to="/basic-ui/pagination">Pagination</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/tabs') ? 'nav-link active' : 'nav-link' } to="/basic-ui/tabs">Tabs</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/tooltips') ? 'nav-link active' : 'nav-link' } to="/basic-ui/tooltips">Tooltips</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/popups') ? 'nav-link active' : 'nav-link' } to="/basic-ui/popups">Popups</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/advanced-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.advancedUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('advancedUiMenuOpen') } data-toggle="collapse">
              <i className="ti-view-list menu-icon"></i>
              <span className="menu-title">Advanced UI</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.advancedUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/dragula') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/dragula">Dragula</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/clipboard') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/clipboard">Clipboard</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/context-menu') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/context-menu">Context menu</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/sliders') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/sliders">Sliders</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/carousel') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/carousel">Carousel</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/loaders') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/loaders">Loaders</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/advanced-ui/tree-view') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/tree-view">Tree View</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
              <i className="ti-clipboard menu-icon"></i>
              <span className="menu-title">Form Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.formElementsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements">Basic Elements</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/advanced-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/advanced-elements">Advanced Elements</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/validation') ? 'nav-link active' : 'nav-link' } to="/form-elements/validation">Validation</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/wizard') ? 'nav-link active' : 'nav-link' } to="/form-elements/wizard">Wizard</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/editors') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.editorsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('editorsMenuOpen') } data-toggle="collapse">
              <i className="ti-eraser menu-icon"></i>
              <span className="menu-title">Editors</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.editorsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/editors/text-editors') ? 'nav-link active' : 'nav-link' } to="/editors/text-editors">Text Editor</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/editors/code-editor') ? 'nav-link active' : 'nav-link' } to="/editors/code-editor">Code Editor</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <i className="ti-bar-chart-alt menu-icon"></i>
              <span className="menu-title">Charts</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js">Chart Js</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/c3-chart') ? 'nav-link active' : 'nav-link' } to="/charts/c3-chart">C3 Charts</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/chartist') ? 'nav-link active' : 'nav-link' } to="/charts/chartist">Chartist</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/google-charts') ? 'nav-link active' : 'nav-link' } to="/charts/google-charts">Google Charts</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/sparkline-charts') ? 'nav-link active' : 'nav-link' } to="/charts/sparkline-charts">Sparkline Charts</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/guage-chart') ? 'nav-link active' : 'nav-link' } to="/charts/guage-chart">Guage Chart</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <i className="ti-layout menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table">Basic Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/data-table') ? 'nav-link active' : 'nav-link' } to="/tables/data-table">Data Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/react-table') ? 'nav-link active' : 'nav-link' } to="/tables/react-table">React Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/sortable-table') ? 'nav-link active' : 'nav-link' } to="/tables/sortable-table">Sortable Table</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/notifications') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/notifications">
              <i className="ti-bell menu-icon"></i>
              <span className="menu-title">Notifications</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <i className="ti-face-smile menu-icon"></i>
              <span className="menu-title">Icons</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi">Material</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/flag-icons') ? 'nav-link active' : 'nav-link' } to="/icons/flag-icons">Flag icons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/font-awesome') ? 'nav-link active' : 'nav-link' } to="/icons/font-awesome">Font Awesome</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/simple-line') ? 'nav-link active' : 'nav-link' } to="/icons/simple-line">Simple Line Icons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/themify') ? 'nav-link active' : 'nav-link' } to="/icons/themify">Themify</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/typicons') ? 'nav-link active' : 'nav-link' } to="/icons/typicons">Typicons</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/maps') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.mapsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('mapsMenuOpen') } data-toggle="collapse">
              <i className="ti-map menu-icon"></i>
              <span className="menu-title">Maps</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.mapsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/maps/vector-map') ? 'nav-link active' : 'nav-link' } to="/maps/vector-map">Vector Maps</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/maps/simple-map') ? 'nav-link active' : 'nav-link' } to="/maps/simple-map">Simple Maps</Link></li>
              </ul>
            </Collapse>
          </li>
      
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <i className="ti-help-alt menu-icon"></i>
              <span className="menu-title">Error Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.errorPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">
              <i className="ti-layers menu-icon"></i>
              <span className="menu-title">General Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.generalPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/profile') ? 'nav-link active' : 'nav-link' } to="/general-pages/profile">Profile</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/faq-1') ? 'nav-link active' : 'nav-link' } to="/general-pages/faq-1">FAQ</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/faq-2') ? 'nav-link active' : 'nav-link' } to="/general-pages/faq-2">FAQ 2</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/news-grid') ? 'nav-link active' : 'nav-link' } to="/general-pages/news-grid">News Grid</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/timeline') ? 'nav-link active' : 'nav-link' } to="/general-pages/timeline">Timeline</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/search-results') ? 'nav-link active' : 'nav-link' } to="/general-pages/search-results">Search Results</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/portfolio') ? 'nav-link active' : 'nav-link' } to="/general-pages/portfolio">Portfolio</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/ecommerce') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ecommercePagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ecommercePagesMenuOpen') } data-toggle="collapse">
              <i className="ti-shopping-cart menu-icon"></i>
              <span className="menu-title">E-commerce</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.ecommercePagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/invoice') ? 'nav-link active' : 'nav-link' } to="/ecommerce/invoice">Invoice</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/pricing') ? 'nav-link active' : 'nav-link' } to="/ecommerce/pricing">Pricing</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/product-catalogue') ? 'nav-link active' : 'nav-link' } to="/ecommerce/product-catalogue">Product Catalogue</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/project-list') ? 'nav-link active' : 'nav-link' } to="/ecommerce/project-list">Project List</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/ecommerce/orders') ? 'nav-link active' : 'nav-link' } to="/ecommerce/orders">Orders</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://bootstrapdash.com/demo/justdo-react-pro/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <i className="ti-write menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li> */}
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
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(SideBarStaff);