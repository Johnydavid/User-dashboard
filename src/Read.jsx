import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "semantic-ui-react";
import { API_URL } from "./URL";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/fontawesome-free-solid";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({ id, firstName, lastName, profile, checked }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("profile", profile);
    localStorage.setItem("checked", checked);
    navigate("/update");
  };

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    getUsers();
  };

  const getUsers = async () => {
    const response = await axios.get(API_URL);
    setApiData(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Read Operation</h1>
      <Table className="main">
        <TableHeader>
          <TableRow>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Profile</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.firstName}</TableCell>
              <TableCell>{data.lastName}</TableCell>
              <TableCell>{data.profile}</TableCell>
              <TableCell>{data.checked ? "Checked" : "Not Checked"}</TableCell>
              <TableCell>
                <Button
                  className="btn btn-warning"
                  onClick={() => updateUser(data)}
                >
                  {" "}
                  <span className="fa-xl">
                    <FontAwesomeIcon icon={faPenSquare} />{" "}
                  </span>{" "}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className="btn btn-danger text-dark"
                  onClick={() => deleteUser(data.id)}
                >
                  <span style={{ color: "black" }} className="fa-xl">
                    <FontAwesomeIcon icon={faTrash} />
                  </span>{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
