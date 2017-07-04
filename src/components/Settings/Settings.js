import React from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import Header from '../Header';
import classes from './Settings.scss';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  renderDurationField() {
    const { timer } = this.props.settings;

    let durationField = null;

    if (timer.isSet) {
      durationField = (
        <div className="field">
          <label className="label">Timer Duration</label>

          <p className="control">
            <input className="input"
              type="number"
              placeholder="10"
              onChange={e => this.props.setTimerDuration(parseInt(e.target.value))} />

            Minutes
          </p>
        </div>
      );
    }

    return durationField;
  }

  render () {
    const {
      settings,
      selectCards,
      selectDeck,
      selectTable,
      toggleTimer,
      toggleEndOnLastKing
    } = this.props;

    return (
      <section className="hero is-primary is-fullheight">
        <Header />

        <div className={`${classes.base} ${settings.tableSelected.id}`}>
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <FaCog /> &nbsp; Settings
                      </p>
                    </header>

                    <div className="card-content">
                      <div className="content">
                        <div className="field">
                          <label className="label">Deck</label>

                          <p className="control">
                            <span className="select is-medium">
                              <select
                                value={settings.deckSelected.id}
                                onChange={({ target }) => selectDeck(target.value)}>
                                  {Object.keys(settings.decks).map((deck, i) => {
                                    const value = settings.decks[deck];
                                    return <option key={i} value={deck}>{value.name}</option>
                                  })}
                              </select>
                            </span>
                          </p>
                        </div>

                        <label className="label">Cards</label>

                        <div className="field">
                          <p className="control">
                            <span className="select is-medium">
                              <select
                                value={settings.cards.map(x => x.id).indexOf(settings.cardsSelected.id)}
                                onChange={(event, value) => selectCards(event.target.value)}>
                                {settings.cards.map((card, i) =>
                                  <option key={i} value={i}>{card.name}</option>
                                )}
                              </select>
                            </span>
                          </p>
                        </div>

                        <label className="label">Table</label>

                        <div className="field">
                          <p className="control">
                            <span className="select is-medium">
                              <select
                              value={settings.table.map(x => x.id).indexOf(settings.tableSelected.id)}
                              onChange={(event, value) => {
                                console.log(event.target.value);
                                selectTable(event.target.value);
                              }}>
                                {settings.table.map((table, i) =>
                                  <option key={i} value={i}>{table.name}</option>
                                )}
                              </select>
                            </span>
                          </p>
                        </div>

                        <div className="field">
                          <p className="control">
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                checked={settings.timer.isSet}
                                onChange={() => toggleTimer()}
                              />

                              Timer {settings.timer.isSet ? 'on' : 'off'}
                            </label>
                          </p>
                        </div>

                        {this.renderDurationField()}

                        <div className="field">
                          <p className="control">
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                checked={settings.endOnLast}
                                onChange={() => toggleEndOnLastKing()}
                              />
                              End game on last king
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>

                    <footer className="card-footer">
                      <a className="card-footer-item">Save</a>

                      <a className="card-footer-item">Reset</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Settings.propTypes = {
  settings: React.PropTypes.object.isRequired,
  selectCards: React.PropTypes.func.isRequired,
  selectDeck: React.PropTypes.func.isRequired,
  selectTable: React.PropTypes.func.isRequired,
  toggleTimer: React.PropTypes.func.isRequired,
  setTimerDuration: React.PropTypes.func.isRequired,
  toggleEndOnLastKing: React.PropTypes.func.isRequired
}

export default Settings;
