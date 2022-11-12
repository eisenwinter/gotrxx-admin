import App from './App.svelte'
import Renew from './Renew.svelte'
let app
if(window.location.pathname === '/silent-renew'){
  app = new Renew({
    target: document.getElementById('app')
  })
}else {
  app = new App({
    target: document.getElementById('app')
  })
}

export default app
