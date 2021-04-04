import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import NewTask from "./NewTask";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, addTask, completeTask }) => {
  return (
    <Card className="text-center w-75 mb-5">
      <Card.Header>
        <Card.Title>Tasks</Card.Title>
        <Card.Text>Click on a task to complete it</Card.Text>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {tasks &&
            tasks.map((task, i) => {
              return (
                <Task
                  description={task.description}
                  onRemove={() => removeTask(task._id, i)}
                  completed={task.completed}
                  completeTask={() => completeTask(task._id, i)}
                  loading={task.loading}
                />
              );
            })}
          <NewTask addTask={addTask} />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TaskList;
