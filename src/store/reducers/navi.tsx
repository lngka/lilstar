import { NAVI_ACTION } from "../actions/actionTypes";
import Zodiacs from "../../models/ZodiacEnum";

interface State {
    currentScreen: String,
    zodiac?: Zodiacs
};

interface NaviAction {
    type: string,
    data: {
        destination: string,
        zodiac: Zodiacs
    }
}

const initialState: State = {
    currentScreen: "",
    zodiac: Zodiacs.None
};

const reducer = (state = initialState, action: NaviAction) => {
    switch(action.type) {
        case NAVI_ACTION:
            return {
                ...state,
                currentScreen: action.data.destination,
                zodiac: action.data.zodiac
            }
        default:
            return state;
    }
}

export default reducer;