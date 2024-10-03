export default function handleProfileSignup (firstName, lastName, fileName) {
    return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((results) => {
	return results.map((result, index) => {
        return {
          status: result.status,
          value: index === 0 ? result.value : result, // Handle different return structures
        };
      });
    }).catch((error) => {
	return [{ status: 'error', value: error }]
    });
}
