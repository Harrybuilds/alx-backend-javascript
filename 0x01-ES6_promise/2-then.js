export default function handleResponseFromAPI(promise) {
    return promise.then((success) => {
	return {
	    status: 200,
	    body: success,
	}
    }).catch(() => ({})).finally(() => {
    console.log('Got a response from the API');
  });
}

const promise = Promise.resolve();
handleResponseFromAPI(promise);
