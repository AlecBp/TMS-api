import { hash } from "bcryptjs";
import { User, Session } from "./models";

const tutors = [
  {
    firstName: "John",
    lastName: "Doe",
    username: "jdoe",
    password: "password",
    dateOfBirth: "1980-01-01",
    email: "john@gmail.com",
    role: "ROLE_TUTOR",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
      { name: "Math", level: "Lv.3" },
      { name: "English", level: "Lv.2" },
      { name: "French", level: "Lv.1" },
      { name: "Science", level: "Lv.1" },
      { name: "Science", level: "Lv.2" },
    ],
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const students = [
  {
    firstName: "Alec",
    lastName: "Pagliarussi",
    username: "alecP",
    password: "password",
    dateOfBirth: "1997-01-01",
    email: "alec@gmail.com",
    role: "ROLE_STUDENT",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
    ],
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    firstName: "Suho",
    lastName: "Kang",
    username: "suhoK",
    password: "password",
    dateOfBirth: "1990-01-01",
    email: "suho@gmail.com",
    role: "ROLE_STUDENT",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Math", level: "Lv.2" },
    ],
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    firstName: "Rafael",
    lastName: "Afonso",
    username: "rafonso",
    password: "password",
    dateOfBirth: "1990-01-01",
    email: "rafael@gmail.com",
    role: "ROLE_STUDENT",
    subjects: [
      { name: "Math", level: "Lv.1" },
      { name: "Science", level: "Lv.2" },
    ],
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const sessions = [
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

const bootstrapTutors = async () => {
  // --------------------------- Tutors ---------------------------
  let added = 0;
  console.log("Checking if initial tutors data is in database");
  const tutorsInDatabase = [];
  tutors.forEach(async (tutor) => {
    const existingTutor = await User.findOne({ email: tutor.email });
    if (existingTutor) tutorsInDatabase.push(existingTutor);
    else {
      const hashedPassword = await hash(tutor.password, 12);
      const newUser = new User({
        ...tutor,
        password: hashedPassword,
      });
      added++;
      const savedTutor = await newUser.save();
      tutorsInDatabase.push(savedTutor);
    }
  });
  console.log(`Number of tutors created: ${added}`);
  console.log(
    `Number of tutors that we already in database: ${tutors.length - added}`
  );
  return tutorsInDatabase;
};

const bootstrapStudents = async () => {
  // --------------------------- Students ---------------------------
  let added = 0;
  console.log("Checking if initial students data is in database");
  const studentsInDatabase = [];
  students.forEach(async (s) => {
    const existingStudent = await User.findOne({ email: s.email });
    if (existingStudent) studentsInDatabase.push(existingStudent);
    else {
      const hashedPassword = await hash(s.password, 12);
      const newStudent = new User({
        ...s,
        password: hashedPassword,
      });
      added++;
      const savedStudent = await newStudent.save();
      studentsInDatabase.push(savedStudent);
    }
  });
  console.log(`Number of students created: ${added}`);
  console.log(
    `Number of students that we already in database: ${students.length - added}`
  );
  return studentsInDatabase;
};

const bootstrapSessions = async ({ tutorsInDatabase, studentsInDatabase }) => {
  console.log(tutorsInDatabase);
  // --------------------------- Sessions ---------------------------
  let added = 0;
  console.log("Checking if initial sessions data is in database");
  const sessionsInDatabase = [];
  const numberOfSessionsStored = await Session.countDocuments();
  if (numberOfSessionsStored < sessions.length) {
    sessions.forEach(async (s) => {
      const newSession = new Session({
        tutor:
          tutorsInDatabase[Math.floor(Math.random() * tutorsInDatabase.length)]
            ._id,
        date: s.date,
        time: s.time,
        location: s.location,
        subjects: s.subjects,
        notes: s.notes,
        attendance: studentsInDatabase.map((s) => {
          return { student: s._id, isPresent: Math.random() < 0.5 };
        }),
      });
      added++;
      const savedSession = await newSession.save();
      sessionsInDatabase.push(savedSession);
    });
  }
  console.log(`Number of sessions created: ${added}`);
  console.log(
    `Number of sessions that are already in database: ${
      sessions.length - added
    }`
  );
  return sessionsInDatabase;
};

export const createInitialData = async () => {
  console.log("Initializing data bootstrap");

  const tutorsInDatabase = await bootstrapTutors();

  const studentsInDatabase = await bootstrapStudents();

  const sessionsInDatabase = await bootstrapSessions({
    tutorsInDatabase,
    studentsInDatabase,
  });

  console.log("Data bootstrap finished");
};
