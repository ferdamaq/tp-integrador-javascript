const comprar1 = document.getElementById('comprar1');
const comprar2 = document.getElementById('comprar2');

comprar1.addEventListener('click',mostrar);
comprar2.addEventListener('click',mostrar);

function mostrar()
{
	document.getElementById("compra").classList.remove('d-none');
	document.getElementById("compra").classList.add('d-block');
}

function equivalencia (categoria)
{
	const indices =
	{
		'Estudiante': '0.2',
		'Trainee': '0.5',
		'Junior': '0.85'
	};
	return indices[categoria];
}

function resumir()
{
	const cantidad = document.getElementById('c-quantity').value;
	const categoria = document.getElementById('c-category').value;
	
	console.log(cantidad);
	console.log(categoria);

	const indice = equivalencia(categoria);
	console.log(indice);
	
	document.getElementById("c-total").value = "Total a Pagar: $" + (cantidad * 200 * indice);
}