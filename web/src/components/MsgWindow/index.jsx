import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { BASE_URL } from "../../Util";

const MsgWindow = (props) => {
    const [id, setId] = useState(null);
    const [room, setRoom] = useState(null);

    useEffect(() => {
        setId(props.match.params.id);
        fetch(`${BASE_URL}/rooms/${props.match.params.id}`)
            .then((r) => r.json())
            .then((resp) => {
                console.log(resp);
                setRoom(resp);
            })
            .catch((err) => console.error(err));
    }, [props.match.params.id]);

    return (
        <div>
            {/* {id && <pre>{id}</pre>} */}
            {room && <h2>{room.name}</h2>}
            <hr />
            <p>*messages here*</p>
        </div>
    );
};

export default withRouter(MsgWindow);
