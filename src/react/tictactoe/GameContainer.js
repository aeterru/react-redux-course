import { connect } from 'react-redux';

import Game from './Game';

const mapStateToProps = state => state;

const GameContainer = connect(
    mapStateToProps
)(Game);

export default GameContainer;