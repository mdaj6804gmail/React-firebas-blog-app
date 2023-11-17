import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./config.firebas";
import { v4 } from "uuid";

const storage = getStorage(app);
/**
 * ```js
 *
 * const Profile_photo_upload = async (file) => {
 *   return photo url
 * }
 * ```
 *@param file
 *
 */
const Profile_photo_upload = async (file) => {
  const storageRef = ref(storage, `profile/${v4()}_${file.name}`);

  return uploadBytes(storageRef, file).then((snapshot) =>
    getDownloadURL(snapshot.ref)
      .then((x) => x)
      .catch((e) => e)
  );
};

export { Profile_photo_upload };
