import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

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
          <main id="page-wrap">
            <Router history={history} children={routes} />
          </main>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
