import { user_data } from "./config.firebas";
import { Profile_photo_upload } from "./storage";

/**
 * 
 * @param {*} name 
 * @param {*} email 
 * @param {*} pass 
 * @param {*} file 
 */

const Create_User = async (name, email, pass, file) => {
  Profile_photo_upload(file)
    .then((url) =>
      user_data(name, email, pass, url)
        .then((data) => data)
        .catch((err) => err)
    )
    .catch((error) => error);
};

export { Create_User };
