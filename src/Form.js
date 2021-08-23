import React, { useState } from "react";
import { useContext } from "react";
import Formq from "./Formq";
import FormSuccess from "./FormSuccess";
import { UserContext } from "./UserContext";

const Form = ({ submitForm }) => {
  const { value, setValue } = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {value}
      {!isSubmitted ? (
        <Formq submitForm={submitForm} />
      ) : (
        <FormSuccess value1={value} />
      )}
    </div>
  );
};

export default Form;
