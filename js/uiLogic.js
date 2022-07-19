document.querySelector('#btnSaveFormulario').addEventListener('click', saveFormulario);
drawFormularioTable();

function saveFormulario(){
    var sNombre = document.querySelector('#txtNombre').value,
        sRut = document.querySelector('#txtRut').value,
        sPatente = document.querySelector('#txtPatente').value,
        sMarca  = document.querySelector('#cbxMarca').value,
        sModelo  = document.querySelector('#cbxModelo').value,
        sColor  = document.querySelector('#cbxColor').value;
    
    addFormularioToSystem(sNombre,sRut,sPatente,sMarca,sModelo,sColor);
    drawFormularioTable();
}

function drawFormularioTable(){
    var list = getFormularioList(),
        tbody = document.querySelector('#formularioTable tbody');
    
    /* tbody.innerHTML = ''; */    

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
            nombreCell = row.insertCell(0);
            rutCell = row.insertCell(1);
            patenteCell = row.insertCell(2);
            marcaCell = row.insertCell(3);
            modeloCell = row.insertCell(4);
            colorCell = row.insertCell(5);

        nombreCell.innerHTML = list[i].nombre;
        rutCell.innerHTML = list[i].rut;
        patenteCell.innerHTML = list[i].patente;
        marcaCell.innerHTML = list[i].marca;
        modeloCell.innerHTML = list[i].modelo;
        colorCell.innerHTML = list[i].color;

        var inputSelect = document.createElement('input');
        inputSelect.type ='radio';
        inputSelect.value = list[i].nombre;
        selectCell.appendChild(inputSelect);

        tbody.appendChild(row);
    }

}