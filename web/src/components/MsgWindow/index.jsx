import React from "react";
import { useParams } from "react-router-dom";

const MsgWindow = () => {
    const params = useParams();
    return (
        <div>
            <h1>Your message stuff should be here</h1>
            <p>
                Params:
                <pre>{JSON.stringify(params)}</pre>
            </p>
        </div>
    );
};

export default MsgWindow;
