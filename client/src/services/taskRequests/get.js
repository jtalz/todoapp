const getTasks = async () => {
  try {
    const response = await fetch(`http://localhost:9000`);
    const response_1 = await response.json();
    return response_1;
  } catch (e) {
    return false;
  }
};

export default getTasks;
