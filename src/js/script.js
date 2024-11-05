const input = document.getElementById('input');
const button = document.getElementById('button');

const estados = document.getElementById('SelecEstados');

estados.addEventListener('change', (event) => {
    const slectestado = event.target.value; 
    if(slectestado === ''){
        showError();
    }else{
    }
});

input.addEventListener('input', (event) => {
    const query = event.target.value;
    if(query === ''){
        showError();
    }else{
        
    }
});

button.addEventListener("click", myFunction);

function myFunction() {

}
myFunction()


function showError(message) {
    const alertDiv = document.getElementById('error-alert');
    alertDiv.classList.remove('d-none');  
    alertDiv.textContent = message;    

    setTimeout(() => {
        alertDiv.classList.add('d-none'); 
    }, 5000);
}