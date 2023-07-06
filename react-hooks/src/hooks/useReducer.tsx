import { useReducer } from 'react';


interface useReducerState {
  count: number
  showText: boolean
}
type useReducerAction = {
   type: "increment" | "toggle"

}

const useReducerComp = () => {


  let initialState = {count: 0, showText: true}
  const reducer = (state: useReducerState, action: useReducerAction) => {
      switch(action.type){
        case "increment":
          return {count: state.count + 1, showText: state.showText}
        default:
          return state
      }

  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      useReducer
    </div>
  )
}

export default useReducerComp