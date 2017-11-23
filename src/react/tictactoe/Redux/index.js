const CLICK_TILE = 'CLICK_TILE';
const SELECT_STEP = 'SELECT_STEP';

//action

export function click_tile(x,y) {
    return {
        type: CLICK_TILE,
        payload: {
            x,
            y,
        },
    };
}


//reducer