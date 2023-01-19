export default async function deleteRegistration(id) {
    const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    };
    const result = await fetch(`/delete/${id}`, options);
    const user = await result.json();
    console.log(user);
}