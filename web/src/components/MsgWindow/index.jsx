import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const MsgWindow = (props) => {
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(props.match.params.id);
    }, [props.match.params.id]);

    return (
        <div>
            <h1>Your message stuff should be here</h1>

            <p>Params:</p>
            {id && <pre>{id}</pre>}
        </div>
    );
};

export default withRouter(MsgWindow);
