import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {

const [data,changeData]=useState(
    {"users":[]}
)

const fetchData=()=>{
    axios.get("https://dummyjson.com/users").then(
        (response)=>{
            changeData(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])

  return (
    <div>

<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data.users.map((value,index)=>{
        return <tr>
        <th scope="row">{value.firstName}</th>
        <td>{value.lastName}</td>
        <td>{value.phone}</td>
        <td>{value.email}</td>
      </tr>
    })}
   
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAll