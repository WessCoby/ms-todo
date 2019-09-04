import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Task from './Task';

// Unfinished component
// Only display lines
const TaskList = ({ lists, tasks, activeList, addTask, updateTask, removeTask }) => {
    const activeTasks = tasks.filter(task => task.listId === activeList);
    return (
        <MDBCol>
            <MDBRow className="d-flex flex-column">
                {
                    (activeList !== "5") ?
                    activeTasks.map(task => (
                        <Task 
                            key={task.id}
                            title={task.title}
                        />
                    )) :
                    tasks.map(task => (
                        <Task 
                            key={task.id}
                            title={task.title}
                        />
                    ))
                }
            </MDBRow>
        </MDBCol>
        
    )
}


export default TaskList;
