import React, { useState } from "react";

function AddTasks() {
  const [inputTasks, setInputTasks] = useState("");
  const [outputTasks, setOutputTasks] = useState([]);
  const [sameTask, setSameTask] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const handleChange = (e) => {
    setInputTasks(e.target.value);
  };
  const handleDelete = (taskIndex) => {
    const newItem = outputTasks.filter((_, index) => index !== taskIndex);
    setOutputTasks(newItem);
  };
  const handleClick = () => {
    if (outputTasks.includes(inputTasks)) {
      setSameTask(true);
      return;
    }

    setOutputTasks((prev) => [...prev, inputTasks]);
    setInputTasks("");
    setSameTask(false);
  };
  const HandleDeletedCompleted = (complatedIndex) => {
    const deletedComplated = completedTasks.filter(
      (_, index) => index !== complatedIndex
    );
    setCompletedTasks(deletedComplated);
  };
  const handleComplete = (taskIndex) => {
    const taskToComplete = outputTasks[taskIndex];

    // Tamamlanan görevleri ekleyin ve kaldırın
    setCompletedTasks((prev) => [...prev, taskToComplete]);
    handleDelete(taskIndex);
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center mt-3">
        <input type="text" value={inputTasks} onChange={handleChange} />
        <button onClick={handleClick}> Add Tasks</button>
      </div>
      <div>
        <h1 className="container d-flex justify-content-center align-items-center mt-3">Tasks</h1>

        {sameTask && (
          <div className="alert alert-danger mt-2">
            You can not add the same task
          </div>
        )}
        {outputTasks.map((task, index) => (
          <div className="container d-flex justify-content-center align-items-center">
            <div className="bg-danger text-warning mb-3 mt-3 d-flex justify-content-between col-12 overflow-auto">
              <li> {task}</li>

              <button onClick={() => handleComplete(index)}>Complate</button>
              <button onClick={() => handleDelete(index)}> x</button>
            </div>
          </div>
        ))}
      </div>

      <div className="completed-list">
        <h2 className="container d-flex justify-content-center align-items-center mt-3">Completed Tasks</h2>
        <ul>
          {completedTasks.map((completedTask, index) => (
            <div
              className="bg-success text-white mb-3 d-flex justify-content-between col-12"
              key={index}
            >
              <li>{completedTask}</li>
              <button
                className="btn btn-warning"
                onClick={() => HandleDeletedCompleted(index)}
              >
                {" "}
                X
              </button>
            </div>
          ))}
        </ul>
      </div>

     
    </div>
  );
}

export default AddTasks;
