import {expect} from 'chai';
import {fromJS} from 'immutable';

import {APIResource} from '../apiResource';

describe('apiResource', () => {
  let apiResource;

  beforeEach(() => {
    apiResource = new APIResource({
      name: 'resource',
      baseURL: '/base'
    });
  });

  describe('when apiResource is created', () => {
    it('should throw an error if no name is passed', () => {
      expect(() => {
        new APIResource({baseURL: '/api'}); //eslint-disable-line
      }).to.throw(Error);
    });

    it('should throw an error if no baseURL is passed', () => {
      expect(() => {
        new APIResource({name: 'name'}); //eslint-disable-line
      }).to.throw(Error);
    });
  });

  describe('when #post is called', () => {
    it('should return request definition', () => {
      const body = {prop: 'value'};
      const request = apiResource.post('/some-url', {body});

      expect(request.endpoint).to.equal('/base/resource/some-url');
      expect(request.body).to.deep.equal(JSON.stringify(body));
      expect(request.method).to.equal('post');
    });

    it('should return headers function that sets Authorization header if token is present in state', () => {
      const authToken = 'random-auth-token';
      const state = fromJS({user: {authToken}});
      const customHeader = 'value';
      const request = apiResource.post('/some-url', {headers: {customHeader}});
      const headers = request.headers(state);

      expect(headers.Authorization).to.equal(`Token ${authToken}`);
      expect(headers.customHeader).to.equal(customHeader);
    });

    it('should not container Authorization header if token is absent in state', () => {
      const state = fromJS({});
      const request = apiResource.post('/some-url');

      expect(request.headers(state)).not.to.ownProperty('Authorization');
    });
  });

  describe('when #get is called', () => {
    it('should return request definition', () => {
      const query = {prop: 'value', prop2: 'value2'};
      const request = apiResource.get('/some-url', {query});

      expect(request.endpoint).to.equal('/base/resource/some-url?prop=value&prop2=value2');
      expect(request.method).to.equal('get');
    });

    it('should return headers function that sets Authorization header if token is present in state', () => {
      const authToken = 'random-auth-token';
      const state = fromJS({user: {authToken}});
      const customHeader = 'value';
      const request = apiResource.post('/some-url', {
        body: {prop: 'value'},
        headers: {customHeader}
      });
      const headers = request.headers(state);

      expect(headers.Authorization).to.equal(`Token ${authToken}`);
      expect(headers.customHeader).to.equal(customHeader);
    });

    it('should not container Authorization header if token is absent in state', () => {
      const state = fromJS({});
      const request = apiResource.get('/some-url');

      expect(request.headers(state)).not.to.ownProperty('Authorization');
    });
  });

  describe('when #put is called', () => {
    it('should return request definition', () => {
      const body = {prop: 'value'};
      const request = apiResource.put('/some-url', {body});

      expect(request.endpoint).to.equal('/base/resource/some-url');
      expect(request.body).to.deep.equal(JSON.stringify(body));
      expect(request.method).to.equal('put');
    });

    it('should return headers function that sets Authorization header if token is present in state', () => {
      const authToken = 'random-auth-token';
      const state = fromJS({user: {authToken}});
      const customHeader = 'value';
      const request = apiResource.post('/some-url', {
        body: {prop: 'value'},
        headers: {customHeader}
      });
      const headers = request.headers(state);

      expect(headers.Authorization).to.equal(`Token ${authToken}`);
      expect(headers.customHeader).to.equal(customHeader);
    });

    it('should not container Authorization header if token is absent in state', () => {
      const state = fromJS({});
      const request = apiResource.put('/some-url');

      expect(request.headers(state)).not.to.ownProperty('Authorization');
    });
  });

  describe('when #delete is called', () => {
    it('should return request definition', () => {
      const body = {prop: 'value'};
      const request = apiResource.delete('/some-url', {body});

      expect(request.endpoint).to.equal('/base/resource/some-url');
      expect(request.body).to.deep.equal(JSON.stringify(body));
      expect(request.method).to.equal('delete');
    });

    it('should return headers function that sets Authorization header if token is present in state', () => {
      const authToken = 'random-auth-token';
      const state = fromJS({user: {authToken}});
      const customHeader = 'value';
      const request = apiResource.post('/some-url', {
        body: {prop: 'value'},
        headers: {customHeader}
      });
      const headers = request.headers(state);

      expect(headers.Authorization).to.equal(`Token ${authToken}`);
      expect(headers.customHeader).to.equal(customHeader);
    });

    it('should not container Authorization header if token is absent in state', () => {
      const state = fromJS({});
      const request = apiResource.delete('/some-url');

      expect(request.headers(state)).not.to.ownProperty('Authorization');
    });
  });
});
