export const initialState = {
  user: null,
  wallet: null,
  dateNowClick: 0,
  email: 'marc@sagues.cat',
  password: null,
  
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_EMAIL: "SET_EMAIL",
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      console.log('action types: '+action.email);
      return {
        ...state, //AGAFA TOT EL STATE
        email: action.email,
      };
      case actionTypes.SET_USER:
      console.log('action types: '+action.user);
      return {
        ...state, //AGAFA TOT EL STATE
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
