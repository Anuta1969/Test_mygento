export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Заполните имя";
  } else if (!values.username.match("^[A-zА-яЁё]+$")) {
    errors.username = "В имени не должно быть цифр";
  }
  if (!values.usersurname.trim()) {
    errors.usersurname = "Заполните фамилию";
  } else if (!values.usersurname.match("^[A-zА-яЁё]+$")) {
    errors.usersurname = "В фамилии не должно быть цифр";
  }

  if (!values.email) {
    errors.useremail = "Заполните email";
  }

  return errors;
}
