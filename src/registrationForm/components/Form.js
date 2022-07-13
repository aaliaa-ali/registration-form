import React, { useState } from "react";
import InputField from "./InputField";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import DropDown from "./DropDown";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import RadioButtons from "./RadioButton";
import Label from "./Label";

function Form() {
  const placeHolder = "Please Enter Your";
  const [value, setValue] = useState();

  const paswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const positiosn = [
    { key: 0, value: "Front End" },
    { key: 1, value: "Back End" },
    { key: 2, value: "Full Stack" },
  ];
  const onSubmit = (data) => console.log(data);
  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    position: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };

  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Name is Required!")
        .matches(
          /^(([a-zA-Z0-9])|[a-zA-Z0-9])*[a-z0-9]$/,
          "Full Name accept characters and Numbers only"
        ),
      phone: yup.string().required("Phone is Required!"),
      email: yup
        .string()
        .required("Email is Required!")
        .email("Please enter Valid Email!"),
      position: yup.string().required("Position is Required!"),
      gender: yup.string().required("Gender is Required!"),
      password: yup
        .string()
        .required("Password is Required!")
        .min(8, "Minimum Eight characters")
        .matches(
          paswordRegex,
          "Password Should Contain at least one upper case English letter, one lower case English letter, one number and one special character"
        ),
      confirmPassword: yup
        .string()
        .required("confirmPassword is Required!")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      country: yup.string().required("Country is Required!"),
      city: yup.string().required("City is Required!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("fullName") }}
            label="Full Name"
            placeHolder="Please Enter Your "
            errors={errors.fullName}
          />
        </Grid>
        <Grid item xs={6}>
          <DropDown
            register={{ ...register("position") }}
            placeHolder="--Please Select--"
            label="Postition You Are Applying For"
            values={positiosn}
            errors={errors.position}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("email") }}
            label="Email"
            errors={errors.email}
            placeHolder={`${placeHolder} email`}
          />
        </Grid>
        <Grid item xs={6}>
          <Label label="Phone" />
          <PhoneInput
            {...register("phone")}
            international
            defaultCountry="RU"
            value={value}
            onChange={setValue}
          />
          {errors.phone ? (
            <p className="error">{errors?.phone?.message}</p>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("country") }}
            label="Country"
            placeHolder="Please Enter Your country"
            errors={errors.country}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("city") }}
            label="City"
            placeHolder="Please Enter Your city"
            errors={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("password") }}
            label="Password"
            placeHolder="Please Enter Your password"
            errors={errors.password}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("confirmPassword") }}
            label="Confirm Password"
            placeHolder="Please Enter Your confirmPassword "
            errors={errors.confirmPassword}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioButtons label="Gender" register={{ ...register("gender") }} />
          {errors.gender ? (
            <p className="error">{errors?.gender?.message}</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <Button
        sx={{ borderRadius: "20px", width: "100%", my: 2 }}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
