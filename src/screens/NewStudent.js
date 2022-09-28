import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Button, MenuItem, Paper, Snackbar, TextField } from "@mui/material";
import { category, classData } from "../misc/textField";
import axios from "axios";
import { useNavigate } from "react-router";

function NewStudent() {
  const nav = useNavigate();
  const [stdName, setStdName] = useState("");
  const [stdClass, setStdClass] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [stdCategory, setStdCategory] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherMobile, setFatherMobile] = useState("");
  const [fatherOccu, setFatherOccu] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherMobile, setMotherMobile] = useState("");
  const [motherOccu, setMotherOccu] = useState("");
  const [uidNo, setUidNo] = useState("");
  const [add, setAdd] = useState("");
  const [nationality, setNationality] = useState("");
  const data = {
    name: stdName,
    class: stdClass,
    mobile: mobile,
    email: email,
    category: stdCategory,
    fatherName: fatherName,
    fatherMobile: fatherMobile,
    fatherOccpation: fatherOccu,
    motherName: motherName,
    motherMobile: motherMobile,
    motherOccupation: motherOccu,
    uidNo: uidNo,
    address: add,
    nationality: nationality,
  };

  const handleRedirect = () => {
    nav("/");
  };

  const handleSave = async () => {
    if (
      !stdName ||
      !stdCategory ||
      !stdClass ||
      !add ||
      !email ||
      !fatherMobile ||
      !fatherName ||
      !fatherMobile ||
      !fatherOccu ||
      !mobile ||
      !motherMobile ||
      !motherName ||
      !motherOccu ||
      !uidNo
    ) {
      alert("Please Enter all fields");
    } else {
      await axios.post("http://localhost:3001/student/", data);

      setAdd("");
      setEmail("");
      setFatherMobile("");
      setFatherName("");
      setFatherOccu("");
      setMobile("");
      setMotherMobile("");
      setMotherName("");
      setMotherOccu("");
      setNationality("");
      setStdCategory("");
      setStdClass("");
      setStdName("");
      setUidNo("");

      alert("Student Added Successfully");
      nav("/");
    }
  };
  return (
    <NewStdStyle>
      <Paper
        elevation={20}
        sx={{
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StdHead>
          <h1>New Student</h1>
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
        </StdHead>
        <StdData>
          <DataOne>
            <h2>
              Name :{" "}
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={stdName}
                onChange={(e) => setStdName(e.target.value)}
              />
            </h2>
            <h2>
              Class :{" "}
              <TextField
                select
                label="Class"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                defaultValue=""
                value={stdClass}
                onChange={(e) => setStdClass(e.target.value)}
              >
                {classData.map((options) => (
                  <MenuItem key={options.value} value={options.value}>
                    {options.value}
                  </MenuItem>
                ))}
              </TextField>
            </h2>
            <h2>
              Mobile No. :{" "}
              <TextField
                label="Mobile"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </h2>
            <h2>
              E-Mail :{" "}
              <TextField
                label="E-Mail"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </h2>
            <h2>
              Address :{" "}
              <TextField
                label="Address"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
              />
            </h2>
            <h2>
              Aadhaar No. :{" "}
              <TextField
                label="Aadhaar No."
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="number"
                value={uidNo}
                onChange={(e) => setUidNo(e.target.value)}
              />
            </h2>
            <h2>
              Category :{" "}
              <TextField
                select
                label="Category"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                defaultValue=""
                value={stdCategory}
                onChange={(e) => setStdCategory(e.target.value)}
              >
                {category.map((options) => (
                  <MenuItem key={options.value} value={options.value}>
                    {options.value}
                  </MenuItem>
                ))}
              </TextField>
            </h2>
          </DataOne>
          <DataTwo>
            <h2>
              Father's Name :{" "}
              <TextField
                label="Father's Name"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </h2>
            <h2>
              Father's Contact :{" "}
              <TextField
                label="Father's Contact"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="number"
                value={fatherMobile}
                onChange={(e) => setFatherMobile(e.target.value)}
              />
            </h2>
            <h2>
              Father's Occupation :{" "}
              <TextField
                label="Father's Occupation"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={fatherOccu}
                onChange={(e) => setFatherOccu(e.target.value)}
              />
            </h2>
            <h2>
              Mother's Name :{" "}
              <TextField
                label="Mother's Name"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
              />
            </h2>
            <h2>
              Mother's Contact :{" "}
              <TextField
                label="Mother's Contact"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="number"
                value={motherMobile}
                onChange={(e) => setMotherMobile(e.target.value)}
              />
            </h2>
            <h2>
              Mother's Occupation :{" "}
              <TextField
                label="Mother's Occupation"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={motherOccu}
                onChange={(e) => setMotherOccu(e.target.value)}
              />
            </h2>
            <h2>
              Nationality :{" "}
              <TextField
                label="Nationality"
                variant="outlined"
                size="small"
                sx={{ width: "50%" }}
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </h2>
          </DataTwo>
        </StdData>
        <SaveBtn>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "900 !important",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </SaveBtn>
      </Paper>{" "}
    </NewStdStyle>
  );
}

const NewStdStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  background-color: #fab919;
`;

const StdHead = styled.div`
  background-color: #722111;
  color: #fdf0eb;
  width: 100%;
  height: 5vw;
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
    height: 10vh;

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

const StdData = styled.div`
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
  height: 98%;
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
  height: 98%;
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

const SaveBtn = styled.div`
  background-color: #fdf0eb;
  width: 100%;
  height: 6vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    height: 10vh;
  }
`;

export default NewStudent;
