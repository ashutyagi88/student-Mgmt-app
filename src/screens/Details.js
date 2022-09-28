import { Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Details() {
  const nav = useNavigate();
  const [stdDetails, setStdDetails] = useState({});
  const id = useSelector((state) => state.id.value);
  const getDetails = async () => {
    const { data } = await axios.get(`http://localhost:3001/student/${id}`);
    setStdDetails(data);
  };

  const handleRedirect = () => {
    nav("/");
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <DetailsStyle>
      <Paper
        elevation={20}
        sx={{
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DetailsHead>
          <h1>Student Profile</h1>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
            onClick={handleRedirect}
          >
            <MdClose></MdClose>
          </Button>
        </DetailsHead>
        <DetailsData>
          <DataOne>
            <h2>
              Name : <span>{stdDetails.name}</span>
            </h2>
            <h2>
              Class : <span>{stdDetails.class}</span>
            </h2>
            <h2>
              Mobile No. :{" "}
              <span>
                <span>+91-</span>
                {stdDetails.mobile}
              </span>
            </h2>
            <h2>
              E-Mail : <span>{stdDetails.email}</span>
            </h2>
            <h2>
              Address : <span>{stdDetails.address}</span>
            </h2>
            <h2>
              Aadhaar No. : <span>{stdDetails.uidNo}</span>
            </h2>
            <h2>
              Category : <span>{stdDetails.category}</span>
            </h2>
          </DataOne>
          <DataTwo>
            <h2>
              Father's Name : <span>{stdDetails.fatherName}</span>
            </h2>
            <h2>
              Father's Contact :{" "}
              <span>
                <span>+91-</span>
                {stdDetails.fatherMobile}
              </span>
            </h2>
            <h2>
              Father's Occupation : <span>{stdDetails.fatherOccpation}</span>
            </h2>
            <h2>
              Mother's Name : <span>{stdDetails.motherName}</span>
            </h2>
            <h2>
              Mother's Contact :{" "}
              <span>
                <span>+91-</span>
                {stdDetails.motherMobile}
              </span>
            </h2>
            <h2>
              Mother's Occupation : <span>{stdDetails.motherOccupation}</span>
            </h2>
            <h2>
              Nationality : <span>{stdDetails.nationality}</span>
            </h2>
          </DataTwo>
        </DetailsData>
      </Paper>
    </DetailsStyle>
  );
}

const DetailsStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  background-color: #fab919;
`;

const DetailsHead = styled.div`
  background-color: #722111;
  color: #fdf0eb;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    padding-left: 8vw;
  }

  button {
    margin-right: 8vw;
  }

  svg {
    color: #fdf0eb;
    font-size: 1.5vw;
  }

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    h1 {
      padding-left: 3vw;
      font-size: 5vw;
    }

    button {
      margin-right: 8vw;
    }

    svg {
      color: #fdf0eb;
      font-size: 2vh;
    }
  }
`;

const DetailsData = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fdf0eb;
  display: flex;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

const DataOne = styled.div`
  background-color: #fdf0eb;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 100%;

    h2 {
      font-size: 3.5vw;
    }
  }
`;

const DataTwo = styled.div`
  background-color: #fdf0eb;
  border-left: 1px solid #181818;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 100%;
    border: none;
    justify-content: flex-start;

    h2 {
      font-size: 3.5vw;
    }
  }
`;

export default Details;
