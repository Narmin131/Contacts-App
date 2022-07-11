export default (state,action) =>{
  switch(action.type){
      case "Remove_user":
          return{
              ...state,
              users : state.users.filter(user =>{
                  return user.id !== action.payload
              })
          }
      case "Add_user":
          return{
              ...state,
              users : [action.payload,...state.users]
          }
      case "Edit_user":
          const updateUser = action.payload;
          const updateUsers = state.users.map(user => {
              if (user.id === updateUser.id){
                  return updateUser
              }
              return user
          })
          return{
              ...state,
             users:updateUsers
          }
      default:
          return state
  }
}