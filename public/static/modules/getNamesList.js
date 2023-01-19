export default async function getNamesList(table) {
    const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    const response = await fetch("/list", options);
    const list = await response.json();

    if (response.status === 500) {
        console.log(list)
        return;
    }

    buildTable(table, list);
};

function buildTable(table, list) {
    table.innerHTML = '';
    let titleRow = table.insertRow(0);
    titleRow.insertCell(0).innerHTML = 'NOME';
    titleRow.insertCell(1).innerHTML = 'E-MAIL';
    titleRow.insertCell(2).innerHTML = 'EXCLUIR';
    
    for (let i = 0; i < list.length; i++) {
        let nRow = table.insertRow(i+1);
        nRow.insertCell(0).innerHTML = `${list[i].name}`;
        nRow.insertCell(1).innerHTML = `${list[i].email}`;
        nRow.insertCell(2).innerHTML = `<span id="${list[i].id}" data-row>excluir</sapn>`;

        if (i % 2 === 0) {
            nRow.style.backgroundColor = "#e3bdc6"
        } else {
            nRow.style.backgroundColor = "#f8f8f8"
        };
    };
}