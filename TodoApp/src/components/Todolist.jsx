import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newtasks, setNewTasks] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function handleEditChange(event) {
        setEditTask(event.target.value);
    }

    function addTask() {
        if (newtasks.trim() !== "") {
            setTasks(t => [...t, newtasks]);
            setNewTasks("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function startEdit(index) {
        setEditIndex(index);
        setEditTask(tasks[index]);
    }

    function saveEdit(index) {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? editTask : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newtasks}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    className="bg-blue-300 text-white p-2 rounded-r-lg hover:bg-blue-600"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ol className="space-y-2">
                {tasks.map((task, index) => (
                    <li
                        className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                        key={index}
                    >
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={editTask}
                                onChange={handleEditChange}
                                className="flex-1 p-2 border border-blue-300 rounded focus:outline-none"
                            />
                        ) : (
                            <span className="flex-1">{task}</span>
                        )}

                        <div className="ml-2 flex space-x-2">
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => deleteTask(index)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>

                            {editIndex === index ? (
                                <button
                                    className="text-green-500 hover:text-green-700"
                                    onClick={() => saveEdit(index)}
                                >
                                    <FontAwesomeIcon icon={faSave} />
                                </button>
                            ) : (
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={() => startEdit(index)}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todolist;
