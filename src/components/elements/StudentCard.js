import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeId } from "../../misc/idSlice";

function StudentCard({ name, mobile, email, fatherName, motherName, id }) {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleView = () => {
    dispatch(changeId(id));
    nav("/details");
  };

  const handleUpdate = () => {
    dispatch(changeId(id));
    nav("/update");
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/student/${id}`);
    window.location.reload(false);
    alert("Student Deleted Successfully");
  };

  useEffect(() => {}, [handleDelete]);

  return (
    <StudentCardDiv>
      <StudentCardStyle>
        <StudentDetails>
          <StudentName>
            <h2>{name}</h2>
          </StudentName>
          <StudentData>
            <h5>
              Mobile No. : <span>{mobile}</span>
            </h5>
            <h5>
              E-Mail : <span>{email}</span>
            </h5>
            <h5>
              Father's Name : <span>{fatherName}</span>
            </h5>
            <h5>
              Mother's Name : <span>{motherName}</span>
            </h5>
          </StudentData>
        </StudentDetails>
        <CardButtons>
          <Button
            variant="contained"
            onClick={handleView}
            sx={{
              backgroundColor: "#722111",
              "&:hover": { backgroundColor: "#722111", opacity: "0.9" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: "900 !important",
            }}
          >
            View
          </Button>
          <Button
            variant="contained"
            onClick={handleUpdate}
            sx={{
              backgroundColor: "#722111",
              "&:hover": { backgroundColor: "#722111", opacity: "0.9" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: "900 !important",
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{
              backgroundColor: "#722111",
              "&:hover": { backgroundColor: "#722111", opacity: "0.9" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: "900 !important",
            }}
          >
            Delete
          </Button>
        </CardButtons>
      </StudentCardStyle>
    </StudentCardDiv>
  );
}

const StudentCardDiv = styled.div`
  width: 100%;
  height: 20vw;
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    height: 100%;
    margin-top: 1%;
  }
`;

const StudentCardStyle = styled(Card)`
  height: 100%;
  width: 90%;
  padding: 2% 0;
  background-color: #fab919 !important;
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px !important;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 75vw;
    height: 50vw !important;
    flex-direction: column;
    font-size: 2.2vw;
    margin-top: 3.5vw;
  }
`;

const StudentDetails = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  h2 {
    margin: 1vw;
    font-size: 2vw;
  }
  h5 {
    margin: 0.1vw;
  }

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;

    h2 {
      font-size: 4vw;
    }
    h5 {
      font-size: 2.5vw;
    }
  }
`;

const StudentName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StudentData = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CardButtons = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  button {
    width: 50%;
  }

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: row;
    width: 100%;

    button {
      width: 20vw !important;
      height: 40%;
      font-size: 3vw;
    }
  }
`;

export default StudentCard;
