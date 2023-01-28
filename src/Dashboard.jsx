import React from "react";
import App.css from "./App";



export default function Dashboard(){
    return(
        <>
        <div class= "p-2 m-4 " >
<button type="button" className="btn btn-primary mb-2" onclick="openJobForm()">Add Jobs</button>

<table className="table table-striped">
    <thead className="bg-success">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Posted At</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
     
    </tbody>
  </table>
</div>

<div id = "overlay", className = "overlay">

</div>
  


        </>
    )
}