window.onload = function() {
    document.getElementById('btnGuardar').addEventListener('click', guardarCliente);
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
    if(localStorage.getItem('clientes') === null) {
        clientes = [];
    } else {
        clientes = JSON.parse(localStorage.getItem('clientes'));
    }

    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
}
