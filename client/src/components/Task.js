import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const Task = ({ description, onRemove, completed, completeTask, loading }) => {
  return (
    <ListGroup.Item className="text-left d-flex justify-content-between align-items-center">
      <div
        onClick={completeTask}
        className="w-75 d-flex align-items-center pl-5"
      >
        <h6 style={{ textDecoration: completed ? "line-through" : "none" }}>
          {description}
        </h6>
      </div>
      {loading && <CircularProgress size="2rem" />}
      <Button variant="outline-danger" onClick={onRemove}>
        Remove
      </Button>
    </ListGroup.Item>
  );
};

export default Task;
