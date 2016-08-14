import SettingsRoute from 'routes/Settings'

describe('(Route) Settings', () => {
  let _route

  beforeEach(() => {
    _route = SettingsRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof(_route)).to.equal('object')
  })

  it('Configuration should contain path `settings`', () => {
    expect(_route.path).to.equal('settings')
  })

})
