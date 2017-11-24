import React from 'react';
import HistoryButton from './HistoryButton';
import Board from './Board';
import initialState from './helpers/initialState';
import printCoords from './helpers/printCoords';
import indexToCoords from './helpers/indexToCoords';
import BoardContainer from './BoardContainer';
class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
        this.handleJumpToMove = this.handleJumpToMove.bind(this);
        this.handleToggleSort = this.handleToggleSort.bind(this);
    }

    handleJumpToMove(moveIndex) {
        this.setState({
            currentMove: moveIndex,
        });
    }

    handleToggleSort() {
        this.setState(({ sort: prevSort }) => ({
            sort: prevSort === 'ASC' ? 'DESC' : 'ASC',
        }));
    }

    render() {
        const { onMove, currentMove, moves, sort } = this.props;
        const {
            squares,
            currentPlayer,
            winner: {
                player: winnerPlayer,
                squares: winningSquares = [],
            } = {},
            isDraw,
        } = moves[currentMove];

        let status = `Next player: ${currentPlayer}`;
        if (winnerPlayer) {
            status = `Winner: ${winnerPlayer}`;
        } else if (isDraw) {
            status = 'Draw';
        }

        const movesButtons = moves.map((thisMove, index) => (
            <li key={index}>
                {index === 0
                    ? <HistoryButton
                        onClick={() => this.handleJumpToMove(0)}
                        label="Go to beginning of game"
                        isBold={index === currentMove}
                    />
                    : <HistoryButton
                        onClick={() => this.handleJumpToMove(index)}
                        label={`Go to move #${index} ${printCoords(indexToCoords(thisMove.squareIndex))}`}
                        isBold={index === currentMove}
                    />}
            </li>
        ));

        return (
            <div className="game">
                <div className="game-board">
                    <BoardContainer />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <div>
                        <button onClick={this.handleToggleSort}>
                            Toggle sort order
                        </button>
                    </div>
                    <ol>{sort === 'DESC' ? movesButtons.reverse() : movesButtons}</ol>
                </div>
            </div>
        );
    }
}

export default Game;