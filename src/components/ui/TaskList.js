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
                {activeTasks.map(list => (
                    <Task 
                        key={list.id}
                        title={list.title}
                    />
                ))}
            </MDBRow>
        </MDBCol>
        
    )
}


export default TaskList;