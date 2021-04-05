export const initialState = {
  user: null,
  wallet: null,
  dateNowClick: 0,
  email: null,
  password: null,
  
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",

  
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
      case actionTypes.SET_PASSWORD:
      console.log('action types: '+action.password);
      return {
        ...state, //AGAFA TOT EL STATE
        password: action.password,
      };

    default:
      return state;
  }
};

export default reducer;
