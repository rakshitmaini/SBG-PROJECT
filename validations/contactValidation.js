import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Name"),
  mobile: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  subject: yup.string().min(5).required().label("Subject"),
  message: yup.string().optional().label("Message"),
});
