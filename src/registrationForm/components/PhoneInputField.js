import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import React, { useState } from "react";
import Label from "./Label";
import PhoneInput from "react-phone-number-input";

function PhoneInputField(props) {
  const { label, register, errors } = props;

  const [value, setValue] = useState();

  console.log("value", value);
  return (
    <div>
      <Label label={label} />
      <PhoneInput
        {...register}
        international
        value={value}
        onChange={setValue}
        onCountryChange={setValue}
      />
      {errors ? <p className="error">{errors?.message}</p> : ""}
      {!isValidPhoneNumber(`${value}`) && value ? (
        <p className="error">Invalid Phone Number</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default PhoneInputField;
