export const initialState = {
    user: null,
    theme: "light",
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_THEME: "SET_THEME",
    LOGOUT: "LOGOUT",
};

const Reducer = (state, action) => {
    console.log(action);
    switch (action.type){

        case actionTypes.SET_USER:
            return{
                ...state, user: action.user,
            };

        case actionTypes.SET_THEME:
            return{
                ...state,
                theme: action.theme,
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                user:null,
            }

        default: 
            return state;
    }
};

export default Reducer;