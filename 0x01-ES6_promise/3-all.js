import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((result) => {
    const requireddata = `${result[0].body} ${result[1].firstName} ${result[1].lastName} `;
    console.log(requireddata);
  }).catch(() => {
    console.log(new Error('Signup system offline'));
  });
}
