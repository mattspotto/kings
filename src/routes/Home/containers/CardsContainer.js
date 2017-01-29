import { connect } from 'react-redux'
import { initCards, shuffleCards, flipCard, hideLastFlipped, showTip } from '../modules/cards'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the settings:   */

import Cards from 'components/Cards'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  initCards,
  shuffleCards,
  flipCard,
  hideLastFlipped,
  showTip
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
      cards: state.cards,
      settings: state.settings
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
