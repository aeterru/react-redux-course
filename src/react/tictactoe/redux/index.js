import initialState from '../helpers/initialState';
import move from '../helpers/move';
// constant

const MOVE_ACTION = 'MOVE_ACTION';

// action

export function moveAction(index) {
    return {
        type: MOVE_ACTION,
        payload: {
            index,
        },
    };
}


// reducer


export default function reducers(state = initialState, action) {
    let nextState = state;
    const { type, payload } = action;

    switch (type) {
        case MOVE_ACTION: {
            const { currentMove, moves } = state;
            const { index } = payload;
            const { squares, winner } = moves[currentMove];

            if (!winner && squares[index] === null) {
                nextState = move(state, index);
            }
            break;
        }
        default:
            break;
    }
    return nextState;
};