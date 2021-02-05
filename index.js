const redux = require('redux')
console.log(redux);

// Dumy state 

const initState = {
    num: 2
}
//
// reducer
const rootReducer = (state = initState,action)=>{
    if(action.type==='INC_NUM'){
        return{
            ...state,
            num: state.num +1
        }
    }
    if(action.type==='ADD_NUM'){
        return{
            ...state,
            num: state.num + action.a
        }
    }
    if(action.type==='DEC_NUM'){
        return{
            ...state,
            num: state.num -1
        }
    }
    return state
}
// store
const store = redux.createStore(rootReducer)

store.subscribe(() =>{
    console.log(store.getState());
})

// dispatch action

store.dispatch({
    type: 'INC_NUM'
})

store.dispatch({
    type:'ADD_NUM',
    a:34
})


store.dispatch({
    type:'DEC_NUM'
})


