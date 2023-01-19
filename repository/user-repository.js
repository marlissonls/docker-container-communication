export async function getUsers(_client) {
    const query = {
        "text": "SELECT * FROM cadastro",
        "values": ""
    };
    const result = await _client.query(query);
    if (result.rows.length === 0) {
        throw new Error("Nenhum usuário cadastrado!");
    } else {
        return { "users": result.rows, "error": null };
    };
};

export async function postUser(_client, _name, _email) {
    const query = {
        "text": "INSERT INTO cadastro (name,email) VALUES ($1,$2) RETURNING *",
        "values": [_name, _email]
    };
    const result = await _client.query(query);
    if (result.rows.length === 0) {
        throw new Error("Erro ao cadastrar usuário!");
    } else {
        return { "user": result.rows[0], "error": null };
    };
};

export async function deleteUser(_client, _id) {
    const query = {
        "text": "DELETE FROM cadastro WHERE id=$1 RETURNING *",
        "values": [_id]
    };
    const result = await _client.query(query);
    if (result.rows.length === 0) {
        throw new Error("Este usuário não pode ser deletado porque ele não existe!");
    } else {
        return { "user": result.rows[0], "error": null };
    };
};