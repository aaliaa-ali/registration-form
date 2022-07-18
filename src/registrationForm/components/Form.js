import React, { useState } from "react";
import InputField from "./reusableComponents/InputField";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import DropDown from "./reusableComponents/DropDown";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-phone-number-input/style.css";
import RadioButtons from "./reusableComponents/RadioButton";
import PhoneInputField from "./reusableComponents/PhoneInputField";
import { useTranslation } from "react-i18next";
import { FormattedMessage, useIntl } from "react-intl";

function Form() {
  const intel=useIntl()
  const { t } = useTranslation();

  const fomatedText=(id)=>{
    return intel.formatMessage({ id: id })
  }
  const placeHolder = fomatedText('placeHolder' );
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
        .required(fomatedText('requiredError'))
        .matches(
          /^(([a-zA-Z0-9])|[a-zA-Z0-9])*[a-z0-9]$/,
          fomatedText('nameInvalid')
        ),
      phone: yup.string().required(fomatedText('requiredError')),
      email: yup
        .string()
        .required(fomatedText('requiredError'))
        .email(fomatedText('emailInvalid')),
      position: yup.string().required(fomatedText('requiredError')),
      gender: yup.string().required(fomatedText('requiredError')),
      password: yup
        .string()
        .required(fomatedText('requiredError'))
        .min(8, fomatedText('passwordLength'))
        .matches(
          paswordRegex,
          fomatedText('passwordInvalid')        ),
      confirmPassword: yup
        .string()
        .required(fomatedText('requiredError'))
        .oneOf([yup.ref("password"), null],fomatedText('confirmPasswordInavlid')),
      country: yup.string().required(fomatedText('requiredError')),
      city: yup.string().required(fomatedText('requiredError')),
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
            label={fomatedText("name")}
            placeHolder={`${placeHolder} ${fomatedText("name")}`}
            errors={errors.fullName}
          />
        </Grid>
        <Grid item xs={6}>
          <DropDown
            register={{ ...register("position") }}
            placeHolder={fomatedText("select")}
            label={fomatedText('position')}
            values={positiosn}
            errors={errors.position}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("email") }}
            label={fomatedText("email")}
            errors={errors.email}
            placeHolder={`${placeHolder} ${fomatedText("email")}`}
          />
        </Grid>
        <Grid item xs={6}>
          <PhoneInputField
            register={{ ...register("phone") }}
            label={fomatedText("phone")}
            errors={errors.phone}
            placeHolder={fomatedText("phone")}

          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("country") }}
            label={fomatedText("country")}
            placeHolder={`${placeHolder} ${fomatedText("country")}`}
            errors={errors.country}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("city") }}
            label={fomatedText("city")}
            placeHolder={`${placeHolder} ${fomatedText("city")}`}
            errors={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("password") }}
            label={fomatedText("password")}
            placeHolder={`${placeHolder} ${fomatedText("password")}`}
            errors={errors.password}
            type="password"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            register={{ ...register("confirmPassword") }}
            label={fomatedText("confirmPassword")}
            placeHolder={`${placeHolder} ${fomatedText("confirmPassword")}`}
            errors={errors.confirmPassword}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <RadioButtons
            label={fomatedText("gender")}
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
        {fomatedText("submit")}
      </Button>
    </form>
  );
}

export default Form;
