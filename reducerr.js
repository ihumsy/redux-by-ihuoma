import React from 'react';
import {createStore} from 'redux'
import {reducer} from 'reducer'


const initState={
    isLoading:true,
    stopLoading:false,
    nextPageNote: "this is the next page"
}
const state='initState'

const Reducer = () => {
    const reducerr=(state,payload)=>{
        switch(payload.type){
            case'loadpage':
                 state.isLoading=true
                 state.stopLoading=false
                 state.nextPageNote=initState.nextPageNote
            break
            case 'stopLoadingPage':
                 state.isLoading=false
                 state.stopLoading=true
                 state.nextPageNote=initState.nextPageNote
            break
            case 'pageNote':
                 state.isLoading=false
                 state.stopLoading=true
                 state.nextPageNote='this note has changed'
            break
            default:
            break
        }
        return state
    }

   

    return (
        <div>
            
        </div>
    );
}

export default Reducer;
