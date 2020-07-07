import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ListItem = (props) => {
    return (
        <div className="my-3 bg-dark text-light rounded">
            <Card
                className="bg-dark"
                id={props.id}
                onClick={() => {
                    props.history.push(`/convo/${props.id}`);
                }}
            >
                <Card.Body className="py-1 px-2">
                    <Card.Title className="my-0">{props.roomName}</Card.Title>
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

export default withRouter(ListItem);
