const initialState = {
    moves: [{
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ],
        currentPlayer: 'O',
        winner: undefined,
        isDraw: false,
        squareIndex: null,
    }],
    currentMove: 0,
    sort: 'ASC',
};

export default initialState;