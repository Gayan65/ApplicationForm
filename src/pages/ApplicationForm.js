import { useState } from "react";

const ApplicationForm = () => {
    const [firstName, setFirstName] = useState("");

    const handleSubmit = () => {
        console.log(firstName);
    };
    return (
        <div>
            <h1>Application Form</h1>
            <div>
                <input
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default ApplicationForm;
