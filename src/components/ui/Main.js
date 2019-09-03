import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import TaskList from './TaskList';

const Main = ({ lists, activeList }) => {
    return (
        <MDBCol id="main" role="main" md="8" lg="9" className="ms-sm-auto p-4">
            <MDBRow className="d-flex flex-column">
                <MDBCol>
                    <MDBRow className="d-flex flex-row justify-content-between">
                        <MDBCol className="d-flex flex-column mb-2">
                            <h4>
                                {lists.find(list => list.id === activeList).name}
                                <span id="elipsis" className="mx-3">...</span>
                            </h4>
                            <p id="date">Thursday, August 29</p>
                        </MDBCol>
                        <MDBCol className="d-flex flex-row justify-content-end">
                            <p className="mr-2"><MDBIcon far icon="lightbulb" /> Today</p>
                            <p className="ml-1"><MDBIcon icon="sort" /> Sort</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="mb-3">
                <MDBIcon icon="plus" /> Add Task
                </MDBCol>
                <TaskList />
            </MDBRow>
        </MDBCol>
    )
}
export default Main;