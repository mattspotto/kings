import React from 'react'
import classes from './Settings.scss'


export const Settings = (props) => (
  <div>
    <h2 className={classes.settingsContainer}>
      Settings
    </h2>

    {JSON.stringify(props.settings)}

    <div>
      <label>
        Deck
        <select
          value={props.settings.deck.indexOf(props.settings.deckSelected)}
          onChange={(event, value) => props.selectDeck(event.target.value)}>
          {props.settings.deck.map((deck, i) =>
            <option key={i} value={i}>{deck}</option>
          )}
        </select>
      </label>

      <br />

      <label>
        Cards
        <select
          value={props.settings.cards.indexOf(props.settings.cardsSelected)}
          onChange={(event, value) => props.selectCards(event.target.value)}>
          {props.settings.cards.map((card, i) =>
            <option key={i} value={i}>{card}</option>
          )}
        </select>
      </label>

      <br />

      <label>
        Table
        <select
          value={props.settings.table.indexOf(props.settings.tableSelected)}
          onChange={(event, value) => {
            console.log(event.target.value);
            props.selectTable(event.target.value);
          }}
        >
          {props.settings.table.map((table, i) =>
            <option key={i} value={i}>{table}</option>
          )}
        </select>
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={props.settings.timer}
          onChange={() => props.toggleTimer()}
        />
        Timer {props.settings.timer ? 'on' : 'off'}
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={props.settings.endOnLast}
          onChange={() => props.toggleEndOnLastKing()}
        />
        End game on last king
      </label>
    </div>
  </div>
)

Settings.propTypes = {
  settings: React.PropTypes.object.isRequired,
  selectCards: React.PropTypes.func.isRequired,
  selectDeck: React.PropTypes.func.isRequired,
  selectTable: React.PropTypes.func.isRequired,
  toggleTimer: React.PropTypes.func.isRequired,
  toggleEndOnLastKing: React.PropTypes.func.isRequired
}

export default Settings
