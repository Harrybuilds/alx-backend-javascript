export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const outcome = true;

    if (outcome) {
      resolve('outcome is true');
    } else {
      reject(new Error('an error occured, therefore, it was rejected'));
    }
  });
}
