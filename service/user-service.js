import * as db from '../repository/db.js';
import * as userQuery from '../repository/user-repository.js';

export async function getUsers() {
    const client = await db.connect();
    try {
        const result = await userQuery.getUsers(client);
        db.release(client);
        return result;
    } catch(error) {
        console.error(error);
        db.release(client);
        return { "status": error.status || 500, "message": error.message };
    };
};

export async function postUser(_name, _email) {
    const client = await db.connect();
    try {
        const result = await userQuery.postUser(client, _name, _email);
        db.release(client);
        return result;
    } catch(error) {
        console.error(error);
        db.release(client);
        return { "status": error.status || 500, "message": error.message };
    }
}

export async function deleteUser(_id) {
    const client = await db.connect();
    try {
        const result = await userQuery.deleteUser(client, _id);
        db.release(client);
        return result;
    } catch(error) {
        console.error(error);
        db.release(client);
        return { "status": error.status || 500, "message": error.message };
    }
}