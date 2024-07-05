import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRST_NAME":
            return action.payload;
        default:
            return state;
    }
};

const ApplicationForm = () => {
    const [state, dispatch] = useReducer(reducer, "");

    const handleSubmit = () => {
        console.log(state);
    };
    return (
        <div>
            <h1>Application Form</h1>
            <div>
                <input
                    placeholder="First name"
                    onChange={(e) =>
                        dispatch({
                            type: "SET_FIRST_NAME",
                            payload: e.target.value,
                        })
                    }
                    value={state}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default ApplicationForm;
