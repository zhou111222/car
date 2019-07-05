let newstate = {
    num: 0,
    data: {}
};
const todos = (state = newstate, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            newstate.num = newstate.num + 1;
            return Object.assign({}, state, {
                num: newstate.num
            });
        case 'REDUCE_TODO':
            if (newstate.num > 0) {
                newstate.num = newstate.num - 1;
            }
            return Object.assign({}, state, {
                num: newstate.num
            });
        case 'GET_DATA_SUCCESS':
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
}

export default todos;