import { APPLY_JOB } from './constant'

const initialState = {
    jobArray: []
}

const applyJobReducer = (state = initialState, action) => {

    switch (action.type) {

        case APPLY_JOB:   
            if (state.jobArray.includes(action.data)) {
                return state;
            }
            return {
                ...state,
                jobArray: [...state.jobArray, action.data]
            };
        default:
            return state
    }
}
export default applyJobReducer;