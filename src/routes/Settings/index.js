import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'settings',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Settings = require('./containers/SettingsContainer').default
      const reducer = require('./modules/settings').default

      /*  Add the reducer to the store on key 'settings'  */
      injectReducer(store, { key: 'settings', reducer })

      /*  Return getComponent   */
      cb(null, Settings)

    /* Webpack named bundle   */
    }, 'settings')
  }
})
