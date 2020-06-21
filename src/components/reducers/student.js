const student = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SOMETHING':
            const { payload } = action;
            return {
                data: payload
            }
        case 'addStudent':
            return{
                students:[...state.students,action.payload],
            }
        case 'selectRow':
            return{
                students:state.students,
                selected:action.payload
            }
        default:
            return state;
    }
}

const defaultState = {
    data: '',
    students:[],
    selected:''
};

export default student;