import { connect } from 'react-redux';

import Board from './Board';
import { moveAction } from './redux';


const mapStateToProps = (state) => {
    const { currentMove, moves } = state;

    const {
        squares,
        winner: {
            squares: winningSquares = [],
        } = {},
    } = moves[currentMove];

    return {
        squares,
        winningSquares,
    };
};

const BoardContainer = connect(
    mapStateToProps,
    {
        onSquareClick: moveAction,
    }
)(Board);

export default BoardContainer;