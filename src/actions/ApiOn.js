import { confirmAsync } from "../lib/Dialog.js";
import { dispatcher } from "../lib/NotificationDispatcher";

import { loadingIndicator } from "../store";


const genericResponse = async (action, url, payload) => {
    loadingIndicator.set(true);
    let succ = false
    try {
      let { data } = await action(url,payload);
      if (data.success) {
        dispatcher.success("Success", `${data.message}`, 2000);
        succ = true
      } else {
        dispatcher.error("Error", `Server returned: ${data.error}`, 2000);
      }
    } catch (err) {
      dispatcher.error("Error", `${err}`, 2000);
    }
    loadingIndicator.set(false);
    return succ
}

const dataResponse = async (action, url, payload) => {
  loadingIndicator.set(true);
  try {
    let { data } = await action(url,payload);
    loadingIndicator.set(false);
    return data;
  } catch (err) {
    dispatcher.error("Error", `${err}`, 2000);
  }
  loadingIndicator.set(false);
  return null
}

const onCofirmGenericResponse = async (dialog, action, url, payload) => {
    const confirmed = await confirmAsync(dialog)
    if(confirmed){
        let res = await genericResponse(action, url, payload)
        return res
    }
    return false
}

export { onCofirmGenericResponse, genericResponse, dataResponse }