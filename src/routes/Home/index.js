import { injectReducer } from '../../store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Cards = require('./containers/CardsContainer').default
      const reducer = require('./modules/cards').default

      /*  Add the reducer to the store on key 'cards'  */
      injectReducer(store, { key: 'cards', reducer })

      /*  Return getComponent   */
      cb(null, Cards)

    /* Webpack named bundle   */
  }, 'cards')
  }
})
