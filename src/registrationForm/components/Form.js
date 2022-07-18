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
import { FormattedMessage, useIntl } from "react-intl";

function Form() {
  const intel = useIntl();
  const { t } = useTranslation();
  const formatedText = (id) => {
    return intel.formatMessage({ id: id });
  };
  const placeHolder = formatedText("placeHolder");
  const paswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const genders = [
    { key: "male", value: <FormattedMessage id="male" /> },
    { key: "female", value: <FormattedMessage id="femele" /> },
    { key: "other", value: <FormattedMessage id="other" /> },
    {
      key: "Prefer not to say",
      value: <FormattedMessage id="preferNotToSay" />,
    },
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
        .required(formatedText('requiredError'))
        .matches(
          /^(([a-zA-Z0-9])|[a-zA-Z0-9])*[a-z0-9]$/,
          "Full Name accept characters and Numbers only"
        ),
      phone: yup.string().required("Phone is Required!"),
      email: yup
        .string()
        .required(formatedText('requiredError'))
        .email("Please enter Valid Email!"),
      position: yup.string().required("Position is Required!"),
      gender: yup.string().required("Gender is Required!"),
      password: yup
        .string()
        .required(formatedText('requiredError'))
        .min(8, "Minimum Eight characters")
        .matches(
          paswordRegex,
          "Password Should Contain at least one upper case English letter, one lower case English letter, one number and one special character"
        ),
      confirmPassword: yup
        .string()
        .required(formatedText('requiredError'))
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
            label={t("name")}
            placeHolder={`${placeHolder} ${formatedText("name")}`}
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
            label={t("email")}
            errors={errors.email}
            placeHolder={`${placeHolder} ${formatedText("email")}`}
          />
        </Grid>
        <Grid item xs={6}>
          <PhoneInputField
            register={{ ...register("phone") }}
            label={t("phone")}
            errors={errors.phone}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("country") }}
            label={t("country")}
            placeHolder={`${placeHolder} ${formatedText("country")}`}
            errors={errors.country}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("city") }}
            label={t("city")}
            placeHolder={`${placeHolder} ${formatedText("city")}`}
            errors={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("password") }}
            label={t("password")}
            placeHolder={`${placeHolder} ${formatedText("password")}`}
            errors={errors.password}
            type="password"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("confirmPassword") }}
            label={t("confirmPassword")}
            placeHolder={`${placeHolder} ${formatedText("confirmPassword")}`}
            errors={errors.confirmPassword}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <RadioButtons
            label={formatedText("gender")}
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
