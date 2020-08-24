export const initialState = {
  idNumber: "",
  stretName: "",
  stretNum: "",
};

export const ADD_PARAMETERS = "ADD_PARAMETERS";
export const ADD_PARAMETERS2 = "ADD_PARAMETERS2";

export const addParametersAction = (data) => {
  return {
    type: ADD_PARAMETERS,
    data,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARAMETERS: {
      return {
        ...state,
        stretName: action.data.stretName,
        stretNum: action.data.stretNum,
      };
    }
    case ADD_PARAMETERS2: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
