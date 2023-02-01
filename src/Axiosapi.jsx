import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Axiosapi() {
  const baseURL = "https://63d20cd64abff88834033efe.mockapi.io/users";
  const [posts, setPosts] = useState([]);



  const getPost=()=>{
    axios
    .get(baseURL)
    .then((response) => {
      console.log(response.data);
      console.log(response);
      setPosts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }

  useEffect(() => {
    getPost();
  
  }, []);

  const doPost = (updateInfo) => {
    axios
      .post(baseURL, updateInfo)
      .then((response) => {
        if (response.status === 201){
            console.log(response);
            getPost();
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateInfo = {
    user: "Johnson David",
    profile: "Developer",
  };

    const doDelete = (deleteInfo) => {
    axios
      .delete(baseURL, deleteInfo)
      .then((response) => {
        // if (response.status === 201){
        //     console.log(response);
            getPost();
        // }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteInfo = {
   id: posts.id
  }
  console.log(deleteInfo);


  return (
    <>
      <button
        onClick={() => doPost(updateInfo)}
        className="btn btn-primary text-dark m-3"
      >
        {" "}
        Add
      </button>



      <table className="table  table-striped m-3">
        <thead>
          <th>Id No.</th>
          <th>User</th>
          <th>Profile</th>
          <th>Actions</th>
        </thead>
        console.log(posts.id)

        {posts.map((post) => (
          <tbody>
            <td>{post.id}</td>
            <td>{post.user}</td>
            <td>{post.profile}</td>
            <td className="mb-5">
              <button className="btn btn-warning">Edit</button>
              <button id = "deleteId" onClick={()=>(doDelete(deleteInfo))} className="btn btn-danger text-dark">Delete</button>
            </td>
          </tbody>
        ))}
      </table>
    </>
  );
}
