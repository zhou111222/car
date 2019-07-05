
//加1
const addTodo = () => ({
    type: 'ADD_TODO'
});
//减1
const reduceTodo = () => ({
    type: 'REDUCE_TODO'
});

const getData = () => ({
  type: 'GET_DATA',
});
export {
    addTodo,
    reduceTodo,
    getData
}