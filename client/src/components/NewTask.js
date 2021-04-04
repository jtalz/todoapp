import React, { useState } from "react";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

const NewTask = ({ addTask }) => {
  const [val, setVal] = useState("");

  const addNewTask = () => {
    addTask(val);
    setVal("");
  };

  return (
    <ListGroup.Item className="text-left d-flex justify-content-between align-items-center">
      <InputGroup className="w-50 d-flex align-items-center">
        <FiPlus color="#5F81E9" size="2rem" />
        <FormControl
          style={{ border: "none", boxShadow: "none" }}
          placeholder="add a new task..."
          aria-label="add a new task..."
          aria-describedby="basic-addon1"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      </InputGroup>
      <Button variant="outline-success" onClick={addNewTask}>
        Add
      </Button>
    </ListGroup.Item>
  );
};

export default NewTask;
