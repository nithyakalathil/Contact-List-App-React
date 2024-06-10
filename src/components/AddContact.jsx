import React, { useState } from 'react'
import Navbar from './Navbar'

const AddContact = () => {

const [data,changedta]=useState(

   { "name":"",
    "last":"",
    "phone":"",
    "email":""
    
}
)

const inputHolder=(event)=>{
    changedta({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
}
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">First Name</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHolder} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Last Name</label>
    <input type="text" className="form-control" name='last' value={data.last} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


    <label htmlFor="" className="form-label">Phone No</label>
    <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHolder}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Email Id</label>
    <input type="text" className="form-control"name='email' value={data.email} onChange={inputHolder} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default AddContact