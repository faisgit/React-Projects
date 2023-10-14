import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Alert,
} from "@material-tailwind/react";
import Icon from "./Icon";
export default function App() {
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid,setValid] = useState(false)
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {submitted && valid ? (
        <Alert
          icon={<Icon />}
          className="rounded-xl mb-3 w-96   bg-[#2ec946]/10 font-medium text-[#2ec946]"
        >
          Thank you for register the form
        </Alert>
      ) : null}
      <Card className="w-96">
        <CardBody className="flex flex-col gap-3">
          <Input
            label="First Name"
            size="lg"
            value={inputValue.firstname}
            onChange={(e) => {
              setInputValue({ ...inputValue, firstname: e.target.value });
            }}
          />
          {
            submitted && !inputValue.firstname ?
          <Typography className="text-xs text-red-500">Please Enter Your First Name </Typography>
          : null
          }
          <Input
            label="Last Name"
            size="lg"
            value={inputValue.lastname}
            onChange={(e) => {
              setInputValue({ ...inputValue, lastname: e.target.value });
            }}
          />
           {
            submitted && !inputValue.lastname ?
          <Typography className="text-xs text-red-500">Please Enter Your Last Name </Typography>
          : null
          }
          <Input
            label="Email"
            size="lg"
            value={inputValue.email}
            onChange={(e) => {
              setInputValue({ ...inputValue, email: e.target.value });
            }}
          />
           {
            submitted && !inputValue.email ?
          <Typography className="text-xs text-red-500">Please Enter Your First Email </Typography>
          : null
          }
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              setSubmitted(true)
              if (inputValue.firstname && inputValue.lastname && inputValue.email) {
                setValid(true)
              }
            }}
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// onChange={(e) => {
//   setInputValue({...inputValue, firstname: e.target.value });
// }}
