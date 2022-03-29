import React from "React";

const baseDeDatos = [
  {
    id: 1,
    nombre: "Patata",
    precio: 1,
    imagen: "patata.jpg",
  },
  {
    id: 2,
    nombre: "Cebolla",
    precio: 1.2,
    imagen: "cebolla.jpg",
  },
  {
    id: 3,
    nombre: "Calabacin",
    precio: 2.1,
    imagen: "calabacin.jpg",
  },
  {
    id: 4,
    nombre: "Fresas",
    precio: 0.6,
    imagen: "fresas.jpg",
  },
];

let carrito = [];
const divisa = "€";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

//AGREGAR ITEM
function anyadirProductoAlCarrito(evento) {
  carrito.push(evento.target.getAttribute("marcador"));
  renderizarCarrito();
}
