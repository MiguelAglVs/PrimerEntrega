const us= {
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

const argv = require ('yargs')
			.command('inscribir', 'matricula', us)
			.argv

const fs = require ('fs');

let  Matricula=[{
idCurso: 1,
	curso: 'Negocios digitales',
	valor:'valor de: $ 2.942.000',
	intencidad: 'intencidad: 80 horas'
},
{
	idCurso: 2,
	curso: 'Inteligencia artificial',
	intencidad: 'Intencidad: 120 horas',
	valor:'Valor: $ 3.800.000'
},
{
	idCurso: 3,
	curso: 'Datbase developer',
	intencidad: 'Intencidad: 120 horas',
	valor: 'Valor: $ 2.100.000'
}
];

function listar() {
	console.log('Cursos ofertados');
	var inc=0;
	for(let i=0;i<Matricula.length;i++){
		inc+=2000;
		setTimeout(() => {
			console.log(Matricula[i].idCurso);
			console.log(Matricula[i].curso);
			console.log(Matricula[i].intencidad);
			console.log(Matricula[i].valor);
		}, inc);
	}

}

function matricular() {
	texto = 'El estudiante: ' + argv.Nombre + '\nCon cedula: ' + argv.Cedula +
	'\nSe matriculo en el curso: ' + Matricula[argv.idCurso-1].curso + '\nCon una ' + Matricula[argv.idCurso-1].intencidad +
	'\nTiene un ' + Matricula[argv.idCurso-1].valor;
	fs.writeFile('datos.txt', texto, (err)=>{
		if(err) throw (err);
		console.log('Se ha matriculado con exito')
	})
}

if (argv.idCurso == undefined) {
	listar();
}else
if (argv.idCurso != 1 && argv.idCurso != 2 && argv.idCurso != 3){
	console.log('El id del grupo no coincide con uno existente grupo.');
	listar();
}else{
	matricular();
}