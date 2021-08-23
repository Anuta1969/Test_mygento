import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
const FormSuccess = () => {
  const { value, setValue } = useContext(UserContext);
  return <div> Спасибо!{value} Мы скоро свяжемся с Вами! </div>;
};

export default FormSuccess;
