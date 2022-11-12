import client from "../api/client";
import { onCofirmGenericResponse, genericResponse, dataResponse } from "./ApiOn";
import { dispatcher } from "../lib/NotificationDispatcher";

const userActions = (user, refresh) => {
    return {
        async unbanUser() {
            const reload = await onCofirmGenericResponse({
                    title: "Are you sure?",
                    message: `This will allow user '${user.email}' to log in again.`,
                },
                client.put,
                `/manage/users/unban`, {
                    id: user.id,
                }
            );
            if (reload) {
                await refresh();
            }
        },
        banUser(currentUserId) {
            return async () => {
                if (user.id === currentUserId) {
                    dispatcher.error("No.", "You cant ban yourself.", 2000);
                    return;
                }
                const reload = await onCofirmGenericResponse(
                    {
                        title: "Are you sure?",
                        message: `This will prohibt user '${user.email}' from logging in.`,
                    },
                    client.put,
                    `/manage/users/ban`,
                    {
                        id: user.id,
                    }
                );
                if (reload) {
                    await refresh();
                }
            }
        },
        async unlockUser(){
            const reload = await onCofirmGenericResponse(
                {
                    title: "Are you sure?",
                        message: `This will lift the lockout on '${user.email}'.`,
                },
                client.put,
                `/manage/users/unlock`,
                {
                    id: user.id,
                }
            );
            if (reload) {
                await refresh();
            }
        },
        async confirmUser() {
            const reload = await onCofirmGenericResponse(
                {
                    title: "Are you sure?",
                        message: `This will opt-in user '${user.email}' and enable login.`
                },
                client.put,
                `/manage/users/confirm`,
                {
                    id: user.id,
                }
            );
            if (reload) {
                await refresh();
            }
        },
        async activeApplications(){
            return await dataResponse(client.post, `/manage/applications/with-authorization-for`, {
                id: user.id,
            });
        },
        async grantAuthorization(client_id, scope) {
            const reload = await genericResponse(client.post, `/manage/authorizations/grant`, {
                client_id: client_id,
                user_id: user.id,
                scope: scope
            });
            if(reload){
                await refresh();
            }
        },    
        async revokeAuthorization(client_id) {
            const reload = await genericResponse(client.post, `/manage/authorizations/revoke`, {
                client_id: client_id,
                user_id: user.id
            });
            if(reload){
                await refresh();
            }
        },
        async addUserToRole(role) {
            const reload = await genericResponse(client.post, `/manage/users/role/add`, {
                role: role,
                id: user.id
            });
            if(reload){
                await refresh();
            }
        },        
        async removeUserFromRole( role) {
            const reload = await genericResponse(client.put, `/manage/users/role/remove`, {
                role: role,
                id: user.id
            });
            if(reload){
                await refresh();
            }
        },
    }
}
export default userActions;