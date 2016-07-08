import url from 'url';

export class APIResource {
  constructor({name, baseURL}) {
    if (!name) {
      throw new Error('APIResource requires a name!');
    }
    if (!baseURL) {
      throw new Error('APIResource requires a baseURL');
    }

    this.baseURL = baseURL;
    this.name = name;

    this.post = this.requestMethodFactory('post');
    this.put = this.requestMethodFactory('put');
    this.get = this.requestMethodFactory('get');
    this.delete = this.requestMethodFactory('delete');
  }

  request(path, options) {
    const sanitizedPath = path.replace(/^\//, '');
    const parsedURL = url.parse(`${this.baseURL}/${this.name}/${sanitizedPath}`);
    const endpoint = url.format({
      ...parsedURL,
      query: options.query || {},
      search: false
    });

    const headers = (state) => {
      const headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      const authToken = state.getIn(['user', 'authToken']);

      if (authToken) {
        headers.Authorization = `Token ${authToken}`;
      }

      return headers;
    };

    return {
      ...options,
      endpoint,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      credentials: 'same-origin'
    };
  }

  requestMethodFactory(method) {
    return (path, options) => {
      return this.request(path, {
        ...options,
        method: method
      });
    };
  }
}
