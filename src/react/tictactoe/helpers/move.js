import buildNextMove from './buildNextMove';

const move = ({
    moves,
    currentMove,
},index) => {
    const nextCurrentMove = currentMove + 1;
    const nextMoves = [
        ...moves.slice(0, nextCurrentMove),
        buildNextMove(moves[currentMove], index),
    ];

    return {
        moves: nextMoves,
        currentMove: nextCurrentMove,
    };
};

export default move;