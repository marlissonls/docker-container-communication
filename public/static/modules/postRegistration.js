export default async function postRegistration(name, email) {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "name": name.value,
            "email": email.value
        })
    };
    const result = await fetch("/register", options);
    const user = await result.json();
    console.log(user);
}