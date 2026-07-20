"use strict";

const who = ["Mi perro", "Mi vecina", "El cartero", "Un alien"];
const action = ["se comio", "rompio", "perdio", "borro"];
const what = ["mi tarea", "las llaves", "el informe", "mi mochila"];
const when = ["hoy", "ayer", "esta manana", "hace cinco minutos"];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

console.log(excuse);
