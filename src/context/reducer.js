export const initialState = {
  username: null,
  wallet: null,
  dateNowClick: 0,
  email: null,
  password: null,
  creation: Date.now(),
  amount: 0
  
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
  SET_WALLET: "SET_WALLET",
  SET_CREATION: "SET_CREATION",
  SET_AMOUNT: "SET_AMOUNT",
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
      console.log('action types: '+action.username);
      return {
        ...state, //AGAFA TOT EL STATE
        username: action.username,
      };
      case actionTypes.SET_PASSWORD:
      console.log('action types: '+action.password);
      return {
        ...state, //AGAFA TOT EL STATE
        password: action.password,
      };
      case actionTypes.SET_WALLET:
      console.log('action types: '+action.wallet);
      return {
        ...state, //AGAFA TOT EL STATE
        wallet: action.wallet,
      };
      case actionTypes.SET_CREATION:
      console.log('action types: '+action.creation);
      return {
        ...state, //AGAFA TOT EL STATE
        creation: action.creation,
      };
      case actionTypes.SET_AMOUNT:
      console.log('action types: '+action.amount);
      return {
        ...state, //AGAFA TOT EL STATE
        amount: action.amount,
      };

    default:
      return state;
  }
};

export default reducer;
