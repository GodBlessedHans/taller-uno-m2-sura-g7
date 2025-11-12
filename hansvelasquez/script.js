// Ejercicio 1: Lista del Súpermercado
let compras = ["Manzanas"];
compras.push("Leche", "Pan");
compras.unshift("Huevos");
compras.splice(1,1);
console.log(compras);

//Ejercicio 2: Pila de Tareas Pendientes (LIFO)
let tareas = ["Revisar emails"];
tareas.unshift("Llamar al cliente");
tareas.unshift("Preparar reporte");
tareas.splice(0,1);
tareas.splice(0,1);//Al eliminar la anterior tarea, la siguiente ocupa la posicion 0
console.log(tareas);

//Ejercicio 3: Pila de Historial (LIFO)
let historial = ["google.com" , "youtube.com" , "facebook.com"];
historial.pop();
historial.pop();
console.log(historial);