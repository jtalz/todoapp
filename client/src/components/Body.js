import React, { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import TaskList from "./TaskList";
import { CircularProgress } from "@material-ui/core";
import * as requests from "../services/index";
import ErrorAlert from "./ErrorAlert";

const reducer = (state, action) => {
  if (action.type === "renewTasks") {
    return { ...state, tasks: action.payload.tasks, loading: false };
  } else if (action.type === "loading") {
    return { ...state, loading: true };
  } else if (action.type === "displayErr") {
    return { ...state, err: true, loading: false };
  } else if (action.type === "closeErr") {
    return { ...state, err: false };
  } else if (action.type === "loadTask") {
    return {
      ...state,
      tasks: state.tasks.map((task, i) =>
        i === action.payload.i ? { ...task, loading: true } : task
      ),
    };
  }
};

const initialState = {
  tasks: [],
  loading: true,
  err: false,
};

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renewTasks = (tasks) =>
    tasks
      ? dispatch({ type: "renewTasks", payload: { tasks } })
      : dispatch({ type: "displayErr" });

  const loadTask = (i) => dispatch({ type: "loadTask", payload: { i } });

  const removeTask = (id, i) => {
    loadTask(i);
    requests.removeTask(id).then((tasks) => renewTasks(tasks));
  };

  const addTask = (desc) =>
    requests.addTask(desc).then((tasks) => renewTasks(tasks));

  const completeTask = (id, i) => {
    loadTask(i);
    requests.completeTask(id).then((tasks) => renewTasks(tasks));
  };

  useEffect(() => {
    requests.getTasks().then((tasks) => renewTasks(tasks));
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      {state.err && (
        <ErrorAlert onClose={() => dispatch({ type: "closeErr" })} />
      )}
      {state.loading ? (
        <CircularProgress />
      ) : (
        <TaskList
          tasks={state.tasks}
          removeTask={removeTask}
          addTask={addTask}
          completeTask={completeTask}
        />
      )}
    </Container>
  );
};

export default Body;
