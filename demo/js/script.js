//initiate the options to define dancing style
var options = {

	all : { duration: 30000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	redOpt: { duration: 10000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	greenOpt: { duration: 10000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	blueOpt : { duration: 10000, colorStep: 30,timeStep: 70, colorRange : [0, 255], backward: false },
	ref: false
};

//selecting body element and calling dancing method for it
//var coda = new Coda('body', options);
coda('body', options).dance();
