import React, { useState } from "react";
import InputField from "./InputField";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import DropDown from "./DropDown";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-phone-number-input/style.css";
import RadioButtons from "./RadioButton";
import PhoneInputField from "./PhoneInputField";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();

  const placeHolder = t("placeHolder");

  const paswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    const genders = [
      { key: "male", value: t("gender.male") },
      { key: "female", value: t("gender.femele")  },
      { key: "other", value: t("gender.other")  },
      { key: "Prefer not to say", value: t("gender.preferNotToSay")  },
    ];
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
    mode: "onTouched",
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("fullName") }}
            label={t("labels.name")}
            placeHolder={`${placeHolder} ${t("labels.name")}`}
            errors={errors.fullName}
          />
        </Grid>
        <Grid item xs={6}>
          <DropDown
            register={{ ...register("position") }}
            placeHolder="__Please Select__"
            label="Postition You Are Applying For"
            values={positiosn}
            errors={errors.position}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("email") }}
            label={t("labels.email")}
            errors={errors.email}
            placeHolder={`${placeHolder} ${t("labels.email")}`}
          />
        </Grid>
        <Grid item xs={6}>
          <PhoneInputField
            register={{ ...register("phone") }}
            label={t("labels.phone")}
            errors={errors.phone}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("country") }}
            label={t("labels.country")}
            placeHolder={`${placeHolder} ${t("labels.country")}`}
            errors={errors.country}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("city") }}
            label={t("labels.city")}
            placeHolder={`${placeHolder} ${t("labels.city")}`}
            errors={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("password") }}
            label={t("labels.password")}
            placeHolder={`${placeHolder} ${t("labels.password")}`}
            errors={errors.password}
            type="password"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("confirmPassword") }}
            label={t("labels.confirmPassword")}
            placeHolder={`${placeHolder} ${t("labels.confirmPassword")}`}
            errors={errors.confirmPassword}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <RadioButtons
            label={t("labels.gender")}
            register={{ ...register("gender") }}
            genders={genders}
          />
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
        {t("submit")}
      </Button>
    </form>
  );
}

export default Form;
