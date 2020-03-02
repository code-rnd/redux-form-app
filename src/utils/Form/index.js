import moment from "moment";

export const validateUtil = value => {
  if (!value) return "обязательное поле";
  if (value.length !== 8) return "введите 8 символов";

  return null;
};

export const defaultValueUtil = value => {
  if (!value) return;
};

export const parsValueUtil = value => {
  if (value !== "12345678") return "введите 12345678";

  return "yes";
};

export const dateParseUtil = value => {
  if (!value) return moment().format("MM.DD.YYYY");

  if (value.length === 8 || value.length === 10)
    return moment(value, "MM.DD.YYYY").format("MM.DD.YYYY");

  return moment().format("MM.DD.YYYY");
};
