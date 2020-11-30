# Setup
## Make sure that there is a '.env' file in the root of the folder with the following values 
```
ACCESS_TOKEN_SECRET=random_string
ACCESS_TOKEN_DURATION=300s
REFRESH_TOKEN_SECRET=random_string
REFRESH_TOKEN_DURATION=1d
BOOTSTRAP_INITIAL_USER=true
MONGO_URI=uri_to_your_mongodb

```
# API
## Get all sessions

```
query getSessions {
  sessions {
    id
    tutor {
      id
      email
    }
    attendance {
      student {
        id
        email
      }
      isPresent
    }
  }
}
```

## Get one session by id

```
query getSession {
  session(id: "5fc43be691368715c428a2e2") {
    id
    tutor {
      id
      email
    }
    attendance {
      student {
        id
        email
      }
      isPresent
    }
  }
}
```

## Edit attendance (mark attendance)

```
mutation editAttendance {
  editAttendance(
    sessionId: "5fc43be691368715c428a2e2"
    studentId: "5fc43bc8d2516751601dda7d"
    status: false
  ) {
    attendance {
      student {
        id
        email
      }
      isPresent
    }
  }
}
```

## Edit session notes

```
mutation editNotes {
  editNotes(sessionId: "5fc43be691368715c428a2e2", notes: "Updated notes") {
    id
    tutor {
      id
    }
    attendance {
      isPresent
    }
    notes
  }
}
```

## Login

```
mutation login {
  login(email: "john@gmail.com", password: "password") {
    token
  }
}

```
