import * as service from '../service/user-service.js';

export async function getUsers(req, res) {
    const result = await service.getUsers();
    if (result.error === null) {
        res.status(200).json(result.users);
    } else {
        res.status(result.status).json(result.message);
    };
};

export async function postUser(req, res) {
    const { name, email } = req.body;
    const result = await service.postUser(name, email);
    if (result.error === null) {
        res.status(200).json(result.user);
    } else {
        res.status(result.status).json(result.message);
    };
};

export async function deleteUser(req, res) {
    const id = req.params.id;
    const result = await service.deleteUser(id);
    if (result.error === null) {
        res.status(200).json(result.user);
    } else {
        res.status(result.status).json(result.message);
    };
};