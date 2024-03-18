const dataObject = {
    "37433356": {
        name: "Random",
        gender: "M",
        expiration: "14/02/2024"
    },
    "12345678": {
        name: "Random2",
        gender: "M",
        expiration: "14/02/2024"
    },
    "38359061": {
        name: "Pablo Daniel SOTERA",
        gender: "M",
        expiration: "14/02/2027"
    },
    "37443356": {
        name: "Terai amir ABRIL CHAIN",
        gender: "M",
        expiration: "14/02/2027"
    },
};

function obtenerCredencialDesdeURL() {
    const url = new URL(window.location.href);

    const params = new URLSearchParams(url.search);

    const valorCredencial = params.get('credencial');
    console.log(valorCredencial)
    fillData(valorCredencial);
}

function fillData(dni) {
    const dniElement = document.getElementById("dni");
    const nameElement = document.getElementById("name");
    const genderElement = document.getElementById("gender");
    const expirationElement = document.getElementById("expiration");

    if (dataObject[dni]) {
        dniElement.textContent = dni;
        nameElement.textContent = dataObject[dni].name;
        genderElement.textContent = dataObject[dni].gender;
        expirationElement.textContent = dataObject[dni].expiration;
    } else {
        console.error("No se encontraron datos para el DNI: ", dni);
    }
}

obtenerCredencialDesdeURL();


// http://127.0.0.1:5500/index.html?credencial=12345678&jwt=eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI4MDkyNyIsImV4cCI6MTcwNzkyMjMwOCwiMl9ub21icmVfeV9hcGVsbGlkbyI6IlRlcmFpIEFtaXIgQUJSSUwgQ0hBSU4iLCIxX2RvY3VtZW50byI6IjM3NDMzMzU2IiwiM19zZXhvIjoiTSIsIjVfcm9sIjoiUGFjaWVudGUiLCI3X2NhbnRpZGFkX3BsYW50YXMiOjksIjRfZmVjaGFfZmluX3ZpZ2VuY2lhIjoiMTQvMDIvMjAyNCIsIjZfbGV5ZW5kYV90cmFuc3BvcnRlIjoiQ2FudGlkYWQgYXV0b3JpemFkYSBhIHRyYW5zcG9ydGFyIGhhc3RhIDQwIGdyIGRlIGZsb3JlcyBzZWNhcyBvIDYgZnJhc2NvcyBkZSAzMG1sIGRlIGFjZWl0ZSBwb3IgcGFjaWVudGUuIExleSBkZSBjYW5uYWJpcyBtZWRpY2luYWwgMjcuMzUwIn0.ffUQ3XYuj46zTOC0HuYZK9c-3l32x8AfzH8Lp0ogfCEmO7kTb66QoutaQfNxbNG5qYAO_-gLQpaOarjYqh6A_WrDAgiBzGhJ7bwaEOv3hcK-a-4-KFhTjGagUrbzxlz7ah5Mj7H6bb85lNe8pPjNLkN3t1DraRBXBA0uwSyjCupdKXLIgAIOoJqdKVrDM50XgwCSYcTlkcF56KSo7vsylUQgztCy--2QVabIZeMvOwuNGBMqnrcQ193CWgvYipDL0xCfB940UyxtHIvBhbvXPrEA74O5MjeIJBsSe2LylNNMwznT2NPDCCCBekgwwX7Rcz6