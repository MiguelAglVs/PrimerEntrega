const datosUs = {
	idCurso: {
		demand: true,
		alias: 'i'
	},
		Nombre: {
		demand: true,
		alias: 'n'
	},
		Cedula: {
		demand: true,
		alias: 'c'
	}
}

const  matricula = [{
	idCurso: 'id del curso: ' + 1,
		curso: 'Negocios digitales',
		intencidad: 'intencidad: 80 horas',
		valor:'valor de: $ 2.942.000 \n',
	},
	{
		idCurso: 'id del curso: ' + 2 ,
		curso: 'Inteligencia artificial',
		intencidad: 'Intencidad: 120 horas',
		valor:'Valor: $ 3.800.000 \n'
	},
	{
		idCurso: 'id del curso: ' + 3 ,
		curso: 'Datbase developer',
		intencidad: 'Intencidad: 120 horas',
		valor: 'Valor: $ 2.100.000\n'
	}
	];

	module.exports = {
		datosUs,
		matricula
	}