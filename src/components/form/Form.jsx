import React, { useState } from "react";
import { Box, Button, Card, FormControl, TextField } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { useProduct } from "../../context/ProductContext";

let init = {
  name: "",
  price: "",
  category: "",
  image: "",
};

const Form = ({ isEdit }) => {
  const { addProduct } = useProduct();

  const [inputValues, setInputValues] = useState(init);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  function handleSubmit() {
    addProduct(inputValues);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <FormControl>
        <Card
          sx={{
            width: "500px",
            p: "70px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <AppleIcon sx={{ fontSize: "50px" }} />
          </Box>
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="price"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="category"
            label="category"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="image"
            label="image"
            variant="outlined"
          />
          {isEdit ? (
            <Button
              onClick={handleSubmit}
              sx={{
                background: "#000",
                "&:hover": {
                  background: "#000",
                },
              }}
              variant="contained"
            >
              edit
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              sx={{
                background: "#000",
                "&:hover": {
                  background: "#000",
                },
              }}
              variant="contained"
            >
              create
            </Button>
          )}
        </Card>
      </FormControl>
    </Box>
  );
};

export default Form;
