import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteDataStart, loadDataStart } from "../Redux/Action/action"
import { useSelector } from "react-redux";

const Dashboard = () => {

    const history = useHistory()

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDataStart())
    }, [])

    const getListState = useSelector((state) => state.listdata.lists)

    const deleteHandler = (id) =>{
        if(window.confirm("are you sure you want to delete")){
            dispatch(deleteDataStart(id))
            // setTimeout(() => {
            //     dispatch(loadDataStart()) 
            // },[500]);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-primary d-flex justify-content-between">
                            <h5 className="text-white">Redux Saga Crud Table</h5>
                            <button className="btn btn-white" onClick={() => history.push('/add_data')}>
                                Add +
                            </button>
                        </div>
                        <div className="card-body">
                            <table className="table striped bordered" >
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getListState && getListState.map((list, idx) => {
                                            return (
                                                <tr>
                                                    <td>{idx + 1}</td>
                                                    <td>{list.name}</td>
                                                    <td>{list.email}</td>
                                                    <td>{list.rating}</td>
                                                    <td>{list.address}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm">
                                                            <i class="fas fa-eye text-white"></i>
                                                        </button>
                                                        &nbsp;
                                                        <button type="button" className="btn btn-secondary btn-sm" onClick={()=>history.push({
                                                           pathname: `/add_data/${list.id}`,
                                                           state: list
                                                       })} >
                                                            <i class="fas fa-pencil-alt text-white"></i>
                                                        </button>
                                                        &nbsp;
                                                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteHandler(list.id)}>
                                                            <i class="fas fa-trash text-white"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;