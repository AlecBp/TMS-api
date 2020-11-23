import { hash } from "bcryptjs";
import { User, Session } from "./models";

const newUserData = {
  firstName: "John",
  lastName: "Doe",
  username: "jdoe",
  password: "password",
  dateOfBirth: "1980-01-01",
  email: "john@gmail.com",
  role: "ROLE_TUTOR",
};

const dummySessions = [
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Science", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
  },
];

export const createInitialData = async () => {
  let existingUser = await User.findOne({ email: newUserData.email });

  if (!existingUser) {
    const hashedPassword = await hash(newUserData.password, 12);

    const newUser = new User({
      ...newUserData,
      password: hashedPassword,
    });
    existingUser = await newUser.save();
  }

  dummySessions.forEach(async (s) => {
    const newSession = new Session({
      tutor: existingUser.id,
      date: s.date,
      time: s.time,
      location: s.location,
      subjects: s.subjects,
    });
    await newSession.save();
  });
};
