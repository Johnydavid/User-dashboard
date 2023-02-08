import React, { useState } from "react";
import { API_URL } from "./URL";
import { Form, FormField, Checkbox } from "semantic-ui-react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profile, setProfile] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();



  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      profile,
      checked,
    });
    
 
navigate('/read')
    
 }

 


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create Operation</h1>

      <Form className="form" onSubmit={postData} >
        <FormField>
          <label className="me-2">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name" required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-2">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name" required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <label className="me-4">Profile</label>
          <input
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder="Enter Job Title"
            className="ms-3" required
          />
        </FormField>{" "}
        <br />
        <FormField>
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="Agree the Terms and Conditions"
          />
        </FormField>{" "}
        <br />
        <input type="submit" value="Submit" className="btn btn-primary"/>
      
      </Form>
    </>
  );
}
