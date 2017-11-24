import calculateWinner from './calculateWinner';
import calculateIsDraw from './calculateIsDraw';

const buildNextMove = (prevMove, index) => {
    const { squares: prevSquares, currentPlayer } = prevMove;
    const nextSquares = [...prevSquares];
    nextSquares[index] = currentPlayer;

    return {
        squares: nextSquares,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
        winner: calculateWinner(nextSquares),
        isDraw: calculateIsDraw(nextSquares),
        squareIndex: index,
    };
};

export default buildNextMove;