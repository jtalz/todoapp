const addTask = async (desc) => {
  try {
    const response = await fetch(`http://localhost:9000/addTask?desc=${desc}`, {
      method: "POST",
    });
    const response_1 = await response.json();
    return response_1;
  } catch (err) {
    return false;
  }
};

export default addTask;
