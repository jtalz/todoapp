const removeTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:9000/removeTask?id=${id}`, {
      method: "POST",
    });
    const response_1 = await response.json();
    return response_1;
  } catch (e) {
    return false;
  }
};

export default removeTask;
