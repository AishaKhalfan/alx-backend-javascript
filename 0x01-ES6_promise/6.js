import {signUpUser} from './4-user-promise';
import {uploadPhoto} from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    //.resolve({ firstName, lastName, filename});
    .all([signUpUser(), uploadPhoto()])
    .then((res) => {
     console.log(`${firstName}, ${lastName}, ${filename}`) 
    });
    .catch(() => console.log(Promise.reject));
}
