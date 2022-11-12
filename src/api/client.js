import axios from 'axios'
import {
  settingStore,
  oidcStore
} from '../store.js';
import {
  get
} from 'svelte/store';
import {
  UserManager
} from 'oidc-client-ts';

let instance = null

oidcStore.subscribe(s => {
  instance = axios.create({
    baseURL: get(settingStore).instanceUrl,
  });
  instance.interceptors.request.use(
    (config) => {
      const token = s.accessToken;
      const auth = token ? `Bearer ${token}` : '';
      config.headers.common['Authorization'] = auth;
      return config;
    },
    (error) => Promise.reject(error)
  );
  instance.interceptors.response.use((resp) => resp, (error) => {
    if (401 === error.response.status) {
      oidcStore.update(d => {
        d.isAuthenticated = false
        d.access_token = null
        return d;
      })
      const manager = new UserManager(get(settingStore).oidcSettings)
      manager.signinRedirect()
    }
  })
})


export default instance