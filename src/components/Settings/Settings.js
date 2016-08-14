import React from 'react'
import classes from './Settings.scss'

export const Settings = (props) => (
  <div>
    <h2 className={classes.settingsContainer}>
      Settings:
      {' '}
      <span className={classes['settings--green']}>
        {props.settings}
      </span>
    </h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Settings.propTypes = {
  settings: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Settings
