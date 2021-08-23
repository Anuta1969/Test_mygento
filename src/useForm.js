import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
const useForm = (validate, callback) => {
  const { value, setValue } = useContext(UserContext);
  const [values, setValues] = useState({
    username: "",
    usersurname: "",
    useremail: "",
    usermale: "",
    userfemale: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
    setValue(values.username);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
