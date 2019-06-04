export const effectsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_EFFECTS':
      return action.effects
    default:
      return state
  }
}





   // let effectObj = Object.entries(this.props.effects)
    // return effectObj.map((effect)=> {
    //   effect[1].map(i => <li>{i}</li>)
    //   return ( <p>{effect[0]}</p>)
    // })
    //map effect[1] with <li> tags
    //Title: {effect[0]:
    //Effects: 

      // mappedEffects = () => {
  //   const test = Object.entries(this.props.effects).map(effect => {
  //     return (
  //     <>
  //       <h2>
  //         {effect[0]}
  //       </h2>
  //       <ul>
  //         {effect[1].map(i => <li>{i}</li>)}
  //       </ul>
  //     </>
  //     )
  //   })

  //   console.log(test)
  // }
  