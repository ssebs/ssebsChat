import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ListItem = (props) => {
    return (
        <div>
            <Card id={props.id}>
                <Card.Body>
                    <Card.Title>{props.roomName}</Card.Title>
                    <Card.Text>
                        <small>{props.lastPerson}</small>: {props.lastMsg}
                    </Card.Text>
                    <footer className="blockquote-footer">
                        {props.sentAt.toDateString()}
                    </footer>
                </Card.Body>
            </Card>
        </div>
    );
};

ListItem.propTypes = {
    id: PropTypes.string,
    roomName: PropTypes.string,
    lastPerson: PropTypes.string,
    lastMsg: PropTypes.string,
    sentAt: PropTypes.instanceOf(Date),
};

export default ListItem;
