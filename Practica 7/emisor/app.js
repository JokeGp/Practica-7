// const Emitter = require(`./emitter`);
const Emitter = require(`events`); // se cambia a el emiter built in node
const config = require("./config.js"); //se inyecta dependencia de nuestro archivo config

const emtr = new Emitter();

emtr.on(config.events.GREET, () => {
  console.log(`Hey-YO`);
});

emtr.on(config.events.GREET, () => {
  console.log(`como estas`);
});
// busca desde la independencia inyectada guardada en una var por el objeto
// events y selecciona el evento GREET que contiene un string predefinido
// el cual sirve para evitar errores de TYPE

console.log(`kiubo`);
emtr.emit(`greet`); // Se ejecutan ambas funciones ya que se llaman greet por definido

// lo que entiendo es que checa si esta la funcion en emtr
// luego la empuja y la guarda en el objeto creado emtr
// y luego la invoca
// aqui nosotros estamos creando las funcinoes que van a
// ser checadas en el emmiter y las estamos pidiendo
// cómo se llaman igual las guarda y las llama en orden
// pd. aproveché el bug

emtr.on(config.events.JUMP, () => {
  console.log(`Alguien brincó`);
});

console.log(emtr); // ahora contamos con 2 funcniones anonimas diferentes
emtr.emit("jump"); // igual que greet solo que ahora usamos el jump del config
// aquí emtr es cómo si fuera un objeto con varios paraetros
// los cuales dentro de un array guardan varias funciones anonymas
// es utíl para darle varias funcionalidades a algo
// utilizando una palabra para indicar el evento.
