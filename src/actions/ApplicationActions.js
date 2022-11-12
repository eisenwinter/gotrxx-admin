import client from "../api/client";
import { onCofirmGenericResponse, genericResponse } from "./ApiOn";
import { dispatcher } from "../lib/NotificationDispatcher";

const applicationActions = (application, refresh) => {
    return {
        async retireApplication(){
            const reload = await onCofirmGenericResponse(
                {
                    title: "Are you sure?",
                    message: `<p>This action can <strong>not</strong> be undone. 
                        <p>Once retired no more token will be issued for <strong>'${application.client_id}'</strong> and all active tokens will be marked as revoked.</p>`,
                },
                client.put,
                `/manage/applications/retire`,
                {
                    client_id: application.client_id,
                }
            );
            if(reload){
                await refresh();
            }
        },
        async setSecret(secret) {
            const reload = await genericResponse(client.put, `/manage/applications/secret/set`, {
                client_id: application.client_id,
                secret: secret
            });
            if(reload){
                await refresh();
            }
        },
        async addRedirectUri (uri){
            const reload = await genericResponse(client.put, `/manage/applications/properties/redirect-uri/add`, {
                client_id: application.client_id,
                uri: uri
            });
            if(reload){
                await refresh();
            }
        },
        async removeRedirectUri(uri) {
            const reload = await genericResponse(client.put, `/manage/applications/properties/redirect-uri/remove`, {
                client_id: application.client_id,
                uri: uri
            });
            if(reload){
                await refresh();
            }
        },
        async addLogoutUri(uri){
            const reload = await genericResponse(client.put, `/manage/applications/properties/logout-uri/add`, {
                client_id: application.client_id,
                uri: uri
            });
            if(reload){
                await refresh();
            }
        },
        async removeLogoutUri(uri){
            const reload = await genericResponse(client.put, `/manage/applications/properties/logout-uri/remove`, {
                client_id: application.client_id,
                uri: uri
            });
            if(reload){
                await refresh();
            }
        },
        async addFlow(flow){
            const reload = await genericResponse(client.put, `/manage/applications/properties/flow/add`, {
                client_id: application.client_id,
                flow: flow
            });
            if(reload){
                await refresh();
            }
        },
        async removeFlow(flow){
            const reload = await genericResponse(client.put, `/manage/applications/properties/flow/remove`, {
                client_id: application.client_id,
                flow: flow
            });
            if(reload){
                await refresh();
            }
        },
        async enablePKCE(){
            const reload = await genericResponse(client.put, `/manage/applications/properties/pkce/enable`, {
                client_id: application.client_id
            });
            if(reload){
                await refresh();
            }
        },
        async disablePKCE(){
            const reload = await genericResponse(client.put, `/manage/applications/properties/pkce/disable`, {
                client_id: application.client_id
            });
            if(reload){
                await refresh();
            }
        }
    
    }
}
export default applicationActions;