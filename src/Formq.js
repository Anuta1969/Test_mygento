import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateinfo";
import "./Form.css";
import { UserContext } from "./UserContext";

const Formq = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const transfer = values.username;

  if (!x && !y) {
    errors.gender = "Заполните пол";
  } else {
    errors.gender = "";
  }
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="titleTop">Анкета соискателя</h1>
        <h2 className="titleSecond">Личные данные</h2>
        <div className="wrapper">
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Имя*
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Имя"
              value={values.username}
              onChange={handleChange}
            />

            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="usersurname" className="form-label">
              Фамилия*
            </label>
            <input
              id="usersurname"
              type="text"
              name="usersurname"
              className="form-input"
              placeholder="Фамилия"
              value={values.usersurname}
              onChange={handleChange}
            />
            {errors.usersurname && <p>{errors.usersurname}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="useremail" className="form-label">
              Электронная почта*{" "}
            </label>
            <input
              id="useremail"
              type="email"
              name="useremail"
              className="form-input"
              placeholder="Электронная почта"
              value={values.useremail}
              onChange={handleChange}
            />
            {errors.useremail && <p>{errors.useremail}</p>}
          </div>
          <div className="form-inputs">
            <label for="file-upload" class="custom-file-upload">
              <i class="fa fa-cloud-upload"></i> + Загрузить резюме
            </label>
            <input id="file-upload" type="file" />
          </div>
        </div>
        <div className="gender">
          <h2 className="titleSecond">Пол*</h2>
          <div className="radios">
            <input
              className="radio"
              type="checkbox"
              name="male"
              checked={x}
              onChange={() => setX(!x)}
            />
            <span>Мужской</span>
            <input
              className="radio"
              type="checkbox"
              checked={y}
              onChange={() => setY(!y)}
              name="female"
            />
            <span>Женский</span>
          </div>
          {errors.gender && <div className="gender">{errors.gender}</div>}
        </div>

        <h2 className="titleSecond">Github</h2>
        <div className="form-inputs">
          <label htmlFor="usersurname" className="form-label">
            Вставьте ссылку на Github
          </label>
          <input
            id="usersurname"
            type="text"
            name="usersurname"
            className="form-input"
            placeholder="Вставьте ссылку на Github"
          />
        </div>

        <div className="confidential">
          <input id="confidential" type="checkbox" name="confidential" />* Я
          согласен с политикой конфиденциальности
        </div>

        <button className="form-btn" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Formq;
