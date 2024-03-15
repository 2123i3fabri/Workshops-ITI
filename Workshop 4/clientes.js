window.onload = function () {
    document.getElementById('btnGuardar').addEventListener('click', guardarCliente);
    mostrarClientes();
}

function guardarCliente() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;

    var cliente = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    };

    var clientes;
    if (localStorage.getItem('clientes') === null) {
        clientes = [];
    } else {
        clientes = JSON.parse(localStorage.getItem('clientes'));
    }

    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';

    mostrarClientes();
}

function mostrarClientes() {
    var clientes = JSON.parse(localStorage.getItem('clientes'));
    var tablaClientes = document.getElementById('tablaClientes');

    // Limpiar la tabla
    tablaClientes.innerHTML = '<tr><th>Nombre</th><th>Apellido</th><th>Numero Telefonico</th></tr>';

    // Agregar los clientes a la tabla
    for (var i = 0; i < clientes.length; i++) {
        tablaClientes.innerHTML += '<tr><td>' + clientes[i].nombre + '</td><td>' + clientes[i].apellido + '</td><td>' + clientes[i].telefono + '</td></tr>';
    }
}
