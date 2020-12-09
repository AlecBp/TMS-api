import {Subject} from "../../models/Subject";
import {User} from "../../models/User";
import { ObjectDoesNotExistError } from "../errors/ObjectDoesNotExistError";


const subjectToUser = async ({subject, user}, action) => {
  let update = {};

  // if(action === "remove") {
  //   update = { $pull: { subjects: subject } };
  // } else {
  //   update = { $push: { subjects: subject } }
  // }
  // // update = { [`${action == "remove" ? "$pull" : "$push"}`]: {subjects: subject} }

  // const [_subject, _user] = await Promise.all([
  //   User.findById(user).select("_id").lean().exec(),
  //   Subject.findById(user).select("_id").lean().exec(),
  // ]);

  // if(!_subject) throw new ObjectDoesNotExistError();
  // if(!_user) throw new ObjectDoesNotExistError();


  return User.findOneAndUpdate(user, update, {
    new: true,
    userFindAndModify: false
  })
    .exec()
    .then((theme) => theme)
    .catch((err) => {
      throw new UnexpectedError();
    });
}

module.exports = subjectToUser;

