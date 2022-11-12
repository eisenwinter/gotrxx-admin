import { notifications } from "../store.js";

const dispatcher = {
    error(title, body, duration){
        notifications.update(d => {
            d.messages.push({
                title: title,
                body: body, 
                duration: duration,
                type: 'danger'
            })
            return d
        });
    },
    success(title,body,duration){
        notifications.update(d => {
            d.messages.push({
                title: title,
                body: body, 
                duration: duration,
                type: 'success'
            })
            return d
        });
    },
    notify(title,body,duration){
        notifications.update(d => {
            d.messages.push({
                title: title,
                body: body, 
                duration: duration
            })
            return d
        });
    }
}

export {dispatcher}