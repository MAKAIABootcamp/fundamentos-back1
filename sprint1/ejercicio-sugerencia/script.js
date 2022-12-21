const dineroCajero = [
  {
    denominacion: "1000",
    cantidad: 3,
    valor: 1000,
    total: 3000,
  },
  {
    denominacion: "500",
    cantidad: 1,
    valor: 500,
    total: 500,
  },
  {
    denominacion: "200",
    cantidad: 2,
    valor: 200,
    total: 400,
  },
];

//Queremos saber la cantidad de dinero disponible en el cajero

let dineroEnCajero = 0;
dineroCajero.forEach((dinero) => {
  dineroEnCajero = dineroEnCajero + dinero.total;
});

console.log(dineroEnCajero);

if (dineroEnCajero) {
  //Preguntamos la cantidad deseada a retirar

  const retiroString = prompt("Por favor digite la cantidad que desea retirar");

  let retiro = parseInt(retiroString);

  console.log(retiro);
  // Recorro el array para ir entregandole al usuario el dinero
  //Necesito tener un array con el dinero que se le entrega al usuario
  const entregaCliente = [
    {
      denominacion: "1000",
      cantidad: 0,
      valor: 1000,
      total: 0,
    },
    {
      denominacion: "500",
      cantidad: 0,
      valor: 500,
      total: 0,
    },
    {
      denominacion: "200",
      cantidad: 0,
      valor: 200,
      total: 0,
    },
  ];

  while (dineroEnCajero > 0 && retiro >= 200) {
    let transacción = false;
    dineroCajero.forEach((dinero, index) => {
      if (
        dinero.denominacion === "1000" &&
        retiro >= dinero.valor &&
        dinero.total > 0 &&
        !transacción
      ) {
        //Agregamos dinero al array del dinero que recibe el usuario
        entregaCliente[index].total =
          entregaCliente[index].total + dinero.valor;
        entregaCliente[index].cantidad = entregaCliente[index].cantidad + 1;
        //Disminuir la cantidad de dinero disponible en el cajero
        dinero.total = dinero.total - dinero.valor;
        dinero.cantidad = dinero.cantidad - 1;
        console.log(dinero.denominacion);
        transacción = true;

        retiro = retiro - dinero.valor;
        dineroEnCajero = dineroEnCajero - dinero.valor;
      }
      if (
        dinero.denominacion === "500" &&
        retiro >= dinero.valor &&
        dinero.total > 0 &&
        !transacción
      ) {
        //Agregamos dinero al array del dinero que recibe el usuario
        entregaCliente[index].total =
          entregaCliente[index].total + dinero.valor;
        entregaCliente[index].cantidad = entregaCliente[index].cantidad + 1;
        //Disminuir la cantidad de dinero disponible en el cajero
        dinero.total = dinero.total - dinero.valor;
        dinero.cantidad = dinero.cantidad - 1;
        console.log(dinero.denominacion);
        transacción = true;

        retiro = retiro - dinero.valor;
        dineroEnCajero = dineroEnCajero - dinero.valor;
      }
      if (
        dinero.denominacion === "200" &&
        retiro >= dinero.valor &&
        dinero.total > 0 &&
        !transacción
      ) {
        //Agregamos dinero al array del dinero que recibe el usuario
        entregaCliente[index].total =
          entregaCliente[index].total + dinero.valor;
        entregaCliente[index].cantidad = entregaCliente[index].cantidad + 1;
        //Disminuir la cantidad de dinero disponible en el cajero
        dinero.total = dinero.total - dinero.valor;
        dinero.cantidad = dinero.cantidad - 1;
        console.log(dinero.denominacion);
        transacción = true;

        retiro = retiro - dinero.valor;
        dineroEnCajero = dineroEnCajero - dinero.valor;
      }
    });

    if (!transacción) {
      break;
    }
  }

  let dineroParaCliente = 0;
  entregaCliente.forEach((dinero) => {
    dineroParaCliente = dineroParaCliente + dinero.total;
  });
  console.log("La cantidad de dinero que el cajero no entregó: $ ", retiro);
  console.log(
    "La cantidad de dinero que quedó disponible en el cajero: $ ",
    dineroEnCajero.toLocaleString()
  );
  console.log(
    "Billetes por denominación que el cajero le entregó al cliente: ",
    entregaCliente
  );
  console.log(
    "La Total de dinero que el cajero le entregó al cliente",
    dineroParaCliente
  );
} else {
  alert("No tengo plata");
}
