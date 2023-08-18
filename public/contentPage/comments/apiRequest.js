let API_URL = "/api";

export class HTTPError extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  }

const apiRequest = async (method, path, body = null) => {
    let options ={
        method: method,
        headers: {"Content-Type": "application/json" }
    };

    if (body !== null) {
        options.body = JSON.stringify(body);
    }

    const requested = await fetch(API_URL + path, options);
    const response = await requested.json();

    if (requested.status === 200) {
        return response;
    } else {
        throw new HTTPError(requestAPI.status, response.error);
    }
}

export default apiRequest;
