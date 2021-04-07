export const initialState = {
  username: null,
  wallet: null,
  dateNowClick: (Date.now() - (48*86400000)),
  email: null,
  password: null,
  creation: Date.now(),
  amount: 0,
  referralLink: null, 
  referralLider: null,
  referralCount: 0,
  
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
  SET_WALLET: "SET_WALLET",
  SET_CREATION: "SET_CREATION",
  SET_AMOUNT: "SET_AMOUNT",
  SET_DATENOWCLICK: "SET_DATENOWCLICK",
  SET_REFERRALLINK: "SET_REFERRALLINK",
  SET_REFERRALLIDER: "SET_REFERRALLIDER",
  SET_REFERRALCOUNT: "SET_REFERRALCOUNT",


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
      case actionTypes.SET_DATENOWCLICK:
      console.log('action types: '+action.dateNowClick);
      return {
        ...state, //AGAFA TOT EL STATE
        dateNowClick: action.dateNowClick,
      };
      case actionTypes.SET_REFERRALLIDER:
      console.log('action types: '+action.referralLider);
      return {
        ...state, //AGAFA TOT EL STATE
        referralLider: action.referralLider,
      };
      case actionTypes.SET_REFERRALLINK:
      console.log('action types: '+action.referralLink);
      return {
        ...state, //AGAFA TOT EL STATE
        referralLink: action.referralLink,
      };
      case actionTypes.SET_REFERRALCOUNT:
      console.log('action types: '+action.referralCount);
      return {
        ...state, //AGAFA TOT EL STATE
        referralCount: action.referralCount,
      };

    default:
      return state;
  }
};

export default reducer;
