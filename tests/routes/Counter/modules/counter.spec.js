import {
  SETTINGS_INCREMENT,
  increment,
  doubleAsync,
  default as settingsReducer
} from 'routes/Settings/modules/settings'

describe('(Redux Module) Settings', () => {
  it('Should export a constant SETTINGS_INCREMENT.', () => {
    expect(SETTINGS_INCREMENT).to.equal('SETTINGS_INCREMENT')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(settingsReducer).to.be.a('function')
    })

    it('Should initialize with a state of 0 (Number).', () => {
      expect(settingsReducer(undefined, {})).to.equal(0)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = settingsReducer(undefined, {})
      expect(state).to.equal(0)
      state = settingsReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(0)
      state = settingsReducer(state, increment(5))
      expect(state).to.equal(5)
      state = settingsReducer(state, {type: '@@@@@@@'})
      expect(state).to.equal(5)
    })
  })

  describe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(increment).to.be.a('function')
    })

    it('Should return an action with type "SETTINGS_INCREMENT".', () => {
      expect(increment()).to.have.property('type', SETTINGS_INCREMENT)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(increment(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(increment()).to.have.property('payload', 1)
    })
  })

  describe('(Action Creator) doubleAsync', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        settings: settingsReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          settings: settingsReducer(_globalState.settings, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(doubleAsync).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(doubleAsync()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
        })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { settings: 2 }

      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
          expect(_globalState.settings).to.equal(4)
          return doubleAsync()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice
          _getStateSpy.should.have.been.calledTwice
          expect(_globalState.settings).to.equal(8)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  describe('(Action Handler) SETTINGS_INCREMENT', () => {
    it('Should increment the state by the action payload\'s "value" property.', () => {
      let state = settingsReducer(undefined, {})
      expect(state).to.equal(0)
      state = settingsReducer(state, increment(1))
      expect(state).to.equal(1)
      state = settingsReducer(state, increment(2))
      expect(state).to.equal(3)
      state = settingsReducer(state, increment(-3))
      expect(state).to.equal(0)
    })
  })
})
