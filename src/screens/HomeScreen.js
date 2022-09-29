import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Paper } from "@mui/material";
import StudentCard from "../components/elements/StudentCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function HomeScreen() {
  const nav = useNavigate();
  const [stdData, setStdData] = useState([]);

  const getDetails = async () => {
    let { data } = await axios.get(`http://localhost:3001/student/`);
    setStdData(data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleAdd = () => {
    nav("/new");
  };
  return (
    <HomeScreenStyle>
      <Paper
        elevation={20}
        sx={{
          width: "90vw",
          height: "90vh",
          display: "flex",
          "@media only screen and (min-width: 320px) and (max-width: 800px)": {
            flexDirection: "column",
          },
        }}
      >
        <Logo>
          <img
            src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664310657/White_Maroon_Yellow_Modern_Education_Logo_sictqp.png"
            alt=""
          />
        </Logo>
        <StudentData>
          <StudentHead>
            <Button
              variant="contained"
              onClick={handleAdd}
              sx={{
                backgroundColor: "#722111",
                "&:hover": { backgroundColor: "#722111", opacity: "0.9" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "900 !important",
              }}
            >
              Add Student
            </Button>
          </StudentHead>
          <StudentContent>
            {stdData.map((user) => (
              <StudentCard
                key={user.id}
                id={user.id}
                name={user.name}
                mobile={user.mobile}
                email={user.email}
                fatherName={user.fatherName}
                motherName={user.motherName}
              ></StudentCard>
            ))}
          </StudentContent>
        </StudentData>
      </Paper>
    </HomeScreenStyle>
  );
}

const HomeScreenStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  background-color: #fab919;
`;

const Logo = styled.div`
  background-color: #fdf0eb;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40vw;
  }

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 20%;
  }
`;

const StudentData = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 80%;
    flex-direction: column-reverse;
  }
`;

const StudentHead = styled.div`
  background-color: #fdf0eb;
  width: 100%;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1vw 0;
  z-index: 1;

  button {
    margin-right: 2vw;
  }

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 50vh;
    justify-content: center;
  }

  @media only screen and (min-width: 480px) and (max-width: 800px) {
    width: 100%;
    height: 50vh;
  }
`;

const StudentContent = styled.div`
  overflow: scroll;
  width: 100%;
  height: 500%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fdf0eb;
  padding-bottom: 1.5vw;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    overflow-y: auto;
  } ;
`;

export default HomeScreen;
