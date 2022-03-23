const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

let password = document.getElementById('fPassword');
let phone = document.getElementById('fPhone');
let nombre = document.getElementById('fName');
let apellido = document.getElementById('fLastN');
let email = document.getElementById('fEmail');
let address = document.getElementById('fAddress');

let errorPassword = document.getElementById('errorPassword');
let errorName = document.getElementById('errorName');  
let errorPhone = document.getElementById('errorPhone');
let errorLastName = document.getElementById('errorLastN');  
let errorMail = document.getElementById('errorMail');  
let errorAddress = document.getElementById('errorAddress'); 



const expReg = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{3,12}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{3,12}$/, 
	password: /^(?=\w*\d)(?=\w*[a-zA-Z])\S{4,8}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3,12}$/,
	phone: /^\d{9,9}$/,
	direccion: /^[a-zA-Z0-ÿ\s]{3,12}$/
}

let validate = (e) => {
	switch (e.target.name){
		case "nombre":
			if(expReg.nombres.test(e.target.value)){
				nombre.classList.add('valid');
				errorName.style.display = 'none';
			}else {
				nombre.classList.add('invalid');
				errorName.style.display ='inline';
			}
			break;
		case "mail":
			if(expReg.correo.test(e.target.value)){
				email.classList.add('valid');
				errorMail.style.display = 'none';
			}else {
				email.classList.add('invalid');
				errorMail.style.display ='inline';
			}
			break;
		case "direccion":
			if(expReg.direccion.test(e.target.value)){
				address.classList.add('valid');
				errorAddress.style.display = 'none';
			}else {
				address.classList.add('invalid');
				errorAddress.style.display = 'inline';
			}
			break;
		case "apellido":
			if(expReg.apellido.test(e.target.value)){
				fLastN.classList.add('valid');
				errorLastName.style.display = 'none';
			}else {
				fLastN.classList.add('invalid');
				errorLastName.style.display = 'inline';
			}
			break;	
		case "pass":
			if(expReg.password.test(e.target.value)){
				fPassword.classList.add('valid');
				errorPassword.style.display = 'none';
			}else {
				fPassword.classList.add('invalid');
				errorPassword.style.display = 'inline';
			}
			break;
		case "phone":
			if(expReg.phone.test(e.target.value)){
				fPhone.classList.add('valid');
				errorPhone.style.display = 'none';
			}else {
				fPhone.classList.add('invalid');
				errorPhone.style.display = 'inline';
			}
			break;	
	}
}

inputs.forEach((input) =>{
	input.addEventListener("blur",validate);
})
formulario.addEventListener ("submit", (e) => {
	e.preventDefault();
});





