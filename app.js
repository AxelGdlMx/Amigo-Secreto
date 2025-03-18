// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value.trim();

    if (nombreAmigo === "") {
        alert("Ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);

    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);

    document.getElementById("amigo").value = ""; // Limpia el campo de entrada
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia resultados anteriores

    const amigosSorteados = [...amigos]; // Clona el arreglo para no modificar el original
    const parejas = [];

        for (let i = 0; i < amigos.length; i++) {
        let elegidoIndex;
        do {
            elegidoIndex = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[elegidoIndex] === amigos[i]);

        parejas.push({
            amigo: amigos[i],
            amigoSecreto: amigosSorteados[elegidoIndex]
        });

        amigosSorteados.splice(elegidoIndex, 1);
    }

    parejas.forEach(pareja => {
        const resultadoItem = document.createElement("li");
        resultadoItem.textContent = `${pareja.amigo} Su amigo secreto es: ${pareja.amigoSecreto}`;
        resultado.appendChild(resultadoItem);
    });
}