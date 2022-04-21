function calcular(){
	
	var resultado;

	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');

	var soma = document.querySelector('#soma');
	var sub = document.querySelector('#sub');
	var mult = document.querySelector('#mult');
	var div = document.querySelector('#div');

	num1 = Number(num1.value);
	num2 = Number(num2.value);

	var result = document.querySelector('.resultadoSoma');

	if(soma.checked){
		resultado = num1 + num2;
		result.innerHTML += '<div>' + num1 + ' + ' + num2 + ' = <strong>' + resultado + '</strong></div>';
	}else if(sub.checked){
		resultado = num1 - num2;
		result.innerHTML += '<div>' + num1 + ' - ' + num2 + ' = <strong>' + resultado + '</strong></div>';
	}else if(mult.checked){
		resultado = num1 * num2;
		result.innerHTML += '<div>' + num1 + ' * ' + num2 + ' = <strong>' + resultado + '</strong></div>';
	}else if(div.checked){
		resultado = num1 / num2;
		result.innerHTML += '<div>' + num1 + ' / ' + num2 + ' = <strong>' + resultado + '</strong></div>';
	}
	
	event.preventDefault();

	
	
}

