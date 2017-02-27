import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { pushRotate as Menu } from 'react-burger-menu';

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  handleClick(e, route) {
    e.preventDefault();
    this.props.history.push(route);
  }

  render () {
    const { history, routes, store } = this.props

    // Maybe can't have Router inside menu wrap component

    return (
      <Provider store={store}>
        <div id="outer-container">
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <div className="menu-item">
              <a className="menu-link" onClick={ (e) => this.handleClick(e, "/settings") }>Settings</a>                
            </div>
          </Menu>
          
          <main id="page-wrap">              
            <Router history={history} children={routes} />
          </main>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
