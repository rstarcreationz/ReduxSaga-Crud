import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {addDataStart, updateDataStart} from "../Redux/Action/action"

const initialData = {
    name: '',
    email: '',
    rating: '',
    address: ''
}

const AddEditForm = () => {

    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState(initialData)
    const history = useHistory();

    const getData  = history.location.state
  
    
    useEffect(()=>{
        
        if(getData){
            setFormValue({...getData}); 
            // console.log("singledata==>>", getData)
        }
    },[])
    
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let postData = {
            address: formValue.address,
            email: formValue.email,
            name: formValue.name,
            rating: formValue.rating
        }
        let id = formValue.id

        if(getData){
            if(Object.keys(formValue).length){
                dispatch(updateDataStart({id, postData}));
                setTimeout(()=>history.push('/'),500);
            }
        }else{
                dispatch(addDataStart(formValue));
                setTimeout(()=>history.push('/'),500);
        }

        
    }

    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                  <div className="card">
                      <div className="card-body">
                          <div className="card-header bg-primary text-white">
                              <h5>
                                  {getData ? "Edit Form" : "Add Form"}
                                  
                                </h5>
                          </div>
                      <form autoComplete="off" className="mt-3" onSubmit={(e)=>handleSubmit(e)}>
                      <div class="form-outline mb-4">
                            <input type="text" id="form1Example1" class="form-control" name="name" autoComplete="off" value={ formValue.name || ""}
                            onChange={(e)=>changeHandler(e)} />
                            {
                                !getData &&
                                <label class="form-label text-primary" for="form1Example1">First Name</label>
                            }
                            
                        </div>
                      <div class="form-outline mb-4">
                            <input type="text" id="form1Example2" class="form-control" name="email" autoComplete="off" value={ formValue.email || ""}
                            onChange={(e)=>changeHandler(e)} />
                            {
                                !getData &&
                            <label class="form-label text-primary" for="form1Example2">Email</label>
                            }
                        </div>
                        <div class="form-outline mb-4">
                            <input type="text" id="form1Example3" class="form-control" name="rating" autoComplete="off" value={ formValue.rating || ""}
                            onChange={(e)=>changeHandler(e)} />
                            {
                                !getData &&
                            <label class="form-label text-primary" for="form1Example3">Rating</label>
                            }
                        </div>
                        <div class="form-outline mb-4">
                            <input type="text" id="form1Example4" class="form-control" name="address" autoComplete="new-password" value={ formValue.address || ""}
                            onChange={(e)=>changeHandler(e)} />
                            {!formValue.address &&
                            <label class="form-label text-primary" for="form1Example4">Address</label>
                            }
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">
                            {getData ? "Update" : "Submit"}
                        </button>
                    </form>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
}


export default AddEditForm;