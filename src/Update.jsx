import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import{Form, FormField, Button, Checkbox}from 'semantic-ui-react';
import { API_URL } from "./URL";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from '@fortawesome/fontawesome-free-solid'



export default function Update(){

    const[id, setId] = useState("");
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[profile, setProfile] = useState("");
    const[checked, setChecked] = useState(false);
    const navigate = useNavigate();


    const updateUser = async()=>{
        await axios.put(API_URL + id, 
            {
                firstName,
                lastName,
                profile,
                checked

        })
        navigate('/read');

    }

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setProfile(localStorage.getItem('profile'));
        setChecked(localStorage.getItem('checked'));


    },[])


    return(
        <>
          <h1 style={{textAlign: "center"}}>Update Operation</h1>
        <Form className="form">
           <FormField>
            <label className="me-2">First Name</label>
            <input value = {firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name"/>
           </FormField> <br />
           <FormField>
            <label className="me-2">Last Name</label>
            <input value = {lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last Name"/> 
           </FormField> <br />
           <FormField>
            <label className="me-4">Profile</label>
            <input value = {profile} onChange={(e)=>setProfile(e.target.value)}placeholder="Enter Job Title" className="ms-3"/> 
           </FormField> <br />
           <FormField>
            <Checkbox checked= {checked} onChange={()=>setChecked(!checked)} label="Agree the Terms and Conditions" /> 
         
           </FormField> <br/>
           <Button className = "btn btn-warning" onClick={updateUser}> <span className = "fa-xl"><FontAwesomeIcon icon= {faPenSquare} /> </span>Update</Button> 
        </Form>
        </>
    )
}