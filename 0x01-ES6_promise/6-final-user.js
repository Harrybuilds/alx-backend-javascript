import { signUpUser, uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((results) => results.map((result, index) => ({
    status: result.status,
    value: index === 0 ? result.value : result, // Handle different return structures
  }))).catch((error) => [{ status: 'error', value: error }]);
}
