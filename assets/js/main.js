function onClick(){
		var newObj = (app.name == 'login')?data_reset:data_login;
		Object.assign(app, newObj);
}

var data_login = {
	name: 'login',
	title: '',
	msg: '',
	inputs: [
		{type: 'email', text: 'Enter your email address', title: 'EMAIL ADDRESS', required: true},
		{type: 'password', text: 'Enter your password', title: 'PASSWORD', required: true},
		{type: 'checkbox', text: '', title: 'REMEMBER ME', required: false}
	],
	links: [
		{type: 'a', text: 'Forgotten password?', action: onClick},
		{type: 'button', text: 'LOGIN', action: ''}
	]
}
var data_reset = {
	name: 'reset',
	title: 'RESET PASSWORD',
	msg: "Hey, it happens to everyone.<br/> Just let us know what email address you use to login and we'll send you an email with instructions.",
	inputs: [
		{type: 'email', text: '', title: 'EMAIL ADDRESS', required: true},
	],
	links: [
		{type: 'button', text: 'CANCEL', action: onClick},
		{type: 'button', text: 'RESET PASSWORD', action: ''}
	]
}
var app = new Vue({
  el: '#login',
  data: Object.assign({}, data_login),
  methods: {
    onClick: onClick
  }
});


document.addEventListener("DOMContentLoaded", function(event) {
	let els = document.getElementsByClassName('content_require');
	for(let el of els){
		el.addEventListener("mouseenter", function(event){
			this.parentNode.parentNode.classList.toggle('require-hover');
		})
		el.addEventListener("mouseleave", function(event){
			this.parentNode.parentNode.classList.toggle('require-hover');
		})
	}
	let inputs = document.getElementsByClassName('content_input');
	for(const input of inputs){
    	if ( input.getAttribute("type") == "email" ) { 
        	input.addEventListener("focus", () => validate(input));
			input.addEventListener("blur", () => validate(input));
    	}
	}
});
function validateEmail(email) {
  if(email == "") return true;
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validate(input){
					if (!validateEmail(input.value) && input.getAttribute("data-state") == "true" ) {
					input.nextElementSibling.textContent = "Invalid email address";
					input.style.color = "#cc0849";
					input.style.borderColor = "#cc0849";
					input.parentNode.parentNode.style.color = "#cc0849";
					input.setAttribute("data-state", "false");
  				}
	
				else if(input.getAttribute("data-state") == "false"){
					input.nextElementSibling.textContent = "";
					input.style.color = "dimgray";
					input.style.borderColor = "green";
					input.parentNode.parentNode.style.color = "#696969";
					input.setAttribute("data-state", "true");								  
				}	
}