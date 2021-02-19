const {datosUs, matricula} = require('./app');

const argv = require ('yargs')
.command('inscribir', 'matricula', datosUs)
.argv

const fs = require ('fs');

function listar() {
	console.log('\nCursos ofertados \n');
	var inc=0;
	for(let i=0;i<matricula.length;i++){
		inc+=2000;
		setTimeout(() => {
			console.log(matricula[i].idCurso);
			console.log(matricula[i].curso);
			console.log(matricula[i].intencidad);
			console.log(matricula[i].valor);
		}, inc);
	}

}

function matricular() {
	texto = 'El estudiante: ' + argv.Nombre + '\nCon cedula: ' + argv.Cedula +
	'\nSe matriculo en el curso: ' + matricula[argv.idCurso-1].curso + '\nCon una ' + matricula[argv.idCurso-1].intencidad +
	'\nTiene un ' + matricula[argv.idCurso-1].valor;
	fs.writeFile('datos.txt', texto, (err)=>{
		if(err) throw (err);
		console.log('\nSe ha matriculado con exito' + '\nlos datos se han guardado en el archivo datos.txt\n')
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