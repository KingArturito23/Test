var formularioList = [];

function addFormularioToSystem(pnombre, prut, ppatente, pmarca, pmodelo, pcolor){
    var newFormulario = {
        nombre : pnombre,
        rut : prut,
        patente : ppatente,
        marca : pmarca,
        modelo : pmodelo,
        color : pcolor
    };
    console.log(newFormulario);
    formularioList.push(newFormulario);
    localStorageFormularioList(formularioList);
}

function getFormularioList(){
    var storedList = localStorage.getItem('localStorageFormularioList');
    if(storedList == null){
        formularioList = [];
    }else{
        formularioList = JSON.parse(storedList);
    }
    return formularioList;
}

function localStorageFormularioList(pList){
    localStorage.setItem('localFormularioList', JSON.stringify(pList));
}