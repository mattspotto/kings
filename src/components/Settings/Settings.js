import React from 'react'
import classes from './Settings.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle';

export const Settings = (props) => (
  <div>
    <h2 className={classes.settingsContainer}>
      Settings
    </h2>
    {JSON.stringify(props.settings)}
    <MuiThemeProvider>
      <div>
        <SelectField
          value={props.settings.deck.indexOf(props.settings.deckSelected)}
          onChange={(value) => props.selectDeck(value)}
          floatingLabelText="Deck"
        >
          {props.settings.deck.map((deck, i) =>
            <MenuItem key={i} value={i} primaryText={deck} />
          )}
        </SelectField>
        <br />
        <SelectField
          value={props.settings.cards.indexOf(props.settings.cardsSelected)}
          onChange={(value) => props.selectCards(value)}
          floatingLabelText="Cards"
        >
          {props.settings.cards.map((card, i) =>
            <MenuItem key={i} value={i} primaryText={card} />
          )}
        </SelectField>
        <br />
        <SelectField
          value={props.settings.table.indexOf(props.settings.tableSelected)}
          onChange={(event, value) => {
            console.log(event, value);
            props.selectTable(value)
          }}
          floatingLabelText="Table"
        >
          {props.settings.table.map((table, i) =>
            <MenuItem key={i} value={i} primaryText={table} />
          )}
        </SelectField>
        <Toggle
          label="Timer"
        />
        <Toggle
          label="End game on last king"
        />
      </div>
    </MuiThemeProvider>
  </div>
)

Settings.propTypes = {
  settings: React.PropTypes.object.isRequired,
  selectCards: React.PropTypes.func.isRequired,
  selectDeck: React.PropTypes.func.isRequired,
  selectTable: React.PropTypes.func.isRequired
}

export default Settings
