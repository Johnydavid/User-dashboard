import React,{useState, useEffect} from "react";
import axios from 'axios';


export default function Axiosapi(){



const baseURL = "https://63d20cd64abff88834033efe.mockapi.io/users";
const [post, setPost] = useState([]);

useEffect(()=>{
    axios.get(baseURL).then(response=>{
        console.log(response);
    }).catch((error)=>{

        console.log(error);
    })
},[]);

}

