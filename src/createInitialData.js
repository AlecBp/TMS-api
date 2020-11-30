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

const students = [
  {
    firstName: "Alec",
    lastName: "Pagliarussi",
    username: "alecP",
    password: "password",
    dateOfBirth: "1997-01-01",
    email: "alec@gmail.com",
    role: "ROLE_STUDENT",
  },
  {
    firstName: "Suho",
    lastName: "Kang",
    username: "suhoK",
    password: "password",
    dateOfBirth: "1990-01-01",
    email: "suho@gmail.com",
    role: "ROLE_STUDENT",
  },
  {
    firstName: "Rafael",
    lastName: "Afonso",
    username: "rafonso",
    password: "password",
    dateOfBirth: "1990-01-01",
    email: "rafael@gmail.com",
    role: "ROLE_STUDENT",
  },
];

const dummySessions = [
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Science", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
  {
    date: "Tue-Nov 10",
    time: "4:00PM - 6:00PM",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.1" },
    ],
    location: "Bloor Collegiate Institute",
    notes: "These are some session notes",
  },
];

export const createInitialData = async () => {
  // Adding tutor
  let existingUser = await User.findOne({ email: newUserData.email });

  if (!existingUser) {
    const hashedPassword = await hash(newUserData.password, 12);

    const newUser = new User({
      ...newUserData,
      password: hashedPassword,
    });
    existingUser = await newUser.save();
  }

  // Adding students
  let existingStudents = [];
  students.forEach(async (s) => {
    const existingStudent = await User.findOne({ email: s.email });
    if (existingStudent) existingStudents.push(existingStudent);
    else {
      const hashedPassword = await hash(s.password, 12);
      const newStudent = new User({
        ...s,
        password: hashedPassword,
      });
      existingStudents.push(await newStudent.save());
    }
  });

  const numberOfSessionsStored = await Session.countDocuments();
  if (numberOfSessionsStored < dummySessions.length) {
    dummySessions.forEach(async (s) => {
      const newSession = new Session({
        tutor: existingUser.id,
        date: s.date,
        time: s.time,
        location: s.location,
        subjects: s.subjects,
        notes: s.notes,
        attendance: existingStudents.map((s) => {
          return { student: s.id, isPresent: Math.random() < 0.5 };
        }),
      });
      await newSession.save();
    });
  }
};
