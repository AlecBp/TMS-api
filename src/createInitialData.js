import { hash } from "bcryptjs";
import { User } from "./models";

const newUserData = {
  firstName: "John",
  lastName: "Doe",
  username: "jdoe",
  password: "password",
  dateOfBirth: "1980-01-01",
  email: "john@gmail.com",
  role: "ROLE_TUTOR",
};

export const createInitialData = async () => {
  const existingUser = await User.findOne({ email: newUserData.email });
  if (!existingUser) {
    const hashedPassword = await hash(newUserData.password, 12);

    const newUser = new User({
      ...newUserData,
      password: hashedPassword,
    });
    newUser.save();
  }
};
