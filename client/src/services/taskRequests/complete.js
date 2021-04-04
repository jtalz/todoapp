const completeTask = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:9000/completeTask?id=${id}`,
      {
        method: "POST",
      }
    );
    const response_1 = await response.json();
    return response_1;
  } catch (e) {
    return false;
  }
};

export default completeTask;
