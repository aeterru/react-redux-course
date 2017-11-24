import getValueIfSame from './getValueIfSame';

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const winningLine = lines.find(line =>
        getValueIfSame(line.map(index => squares[index]))
    );

    return winningLine
        ? { player: squares[winningLine[0]], squares: winningLine }
        : undefined;
};

export default calculateWinner;