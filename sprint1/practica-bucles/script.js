//Realizar un inicio de sesión de un usuario. Si el usuario existe dentro del listado usuarios vamos a mostrarle un alert que le diga 'Este usuario existe', si no existe que el alert muestre 'El usuario no existe'. Luego de validar que exista el usuario se le va a solicitar que ingrese la constraseña.

//1. Definir nuestro array de usuarios.
const users = [
  {
    id: 1,
    name: "Andrés Prieto",
    age: 20,
    email: "andres@gmail.com",
    password: "123",
  },
  {
    id: 2,
    name: "Brian Steven",
    age: 20,
    email: "brian@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "Camilo Andrés",
    age: 20,
    email: "camilo@gmail.com",
    password: "12345",
  },
];

//Definición de funciones

//Declarar un función que nos permita Registrar un nuevo usuario

const register = () => {
  const email = prompt("Por favor ingrese su email");
  const password = prompt("Por favor ingrese su contraseña");
  const name = prompt("Por favor ingrese su nombre");
  const ageString = prompt("Por favor ingrese su edad");

  const age = parseInt(ageString);
  const id = users.length + 1;

  const newUser = {
    id,
    name,
    age,
    email,
    password,
  };

  // for in 

  for (const key in newUser) {
    const propertyValue = newUser[key];
    console.log(key);
    console.log(propertyValue);
    if (!propertyValue) {
      console.log(`El valor de la propiedad ${key} está vacío`);
      if (key === "age") {
        const ageSrt = prompt(`Por favor ingrese su ${key}`);
        newUser[key] = parseInt(ageSrt);
        while (!newUser[key]) {
          newUser[key] = prompt(`Por favor ingrese su ${key}`);
        }
      } else {
        newUser[key] = prompt(`Por favor ingrese su ${key}`);
        while (!newUser[key]) {
          newUser[key] = prompt(`Por favor ingrese su ${key}`);
        }
      }
    }
  }

  console.log(newUser);

  //Agregar el nuevo usuario al array users
  users.push(newUser);

  alert("Excelente! El usuario ha sido creado exitosamente");

  console.log(users);
};

//2. Solicitar al usuario el email y la contraseña
let email = prompt("Por favor ingrese su email");
let password = prompt("Por favor ingrese su contraseña");

const userFound = users.find((user) => user.email === email);

console.log(userFound);

if (userFound) {
  //   if (userFound.password === password) {
  //     alert("La contraseña coincidió");
  //   } else {
  //     alert("Contraseña errónea");
  //   }
  let intentosPermitidos = 3;
  while (userFound.password !== password && intentosPermitidos) {
    password = prompt(
      "La contraseña equivocada, por favor ingrésela nuevamente"
    );
    intentosPermitidos--;
    // if (!intentosPermitidos) {
    //     break;
    // }
  }

  if (userFound.password === password) {
    alert("Bienvenido ha iniciado sesión");
  }
  if (!intentosPermitidos) {
    alert("Contraseña errada, no puede seguir intentando");
  }
  console.log(password);
} else {
  //   alert(
  //     "Este usuario no existe, debe crear una cuenta o verificar el email que ingresó"
  //   );
  const userResponse = confirm(
    "Sr. Usuario, si desea crear una nueva cuenta haga click en ACEPTAR o si prefiere seguir intentado iniciar sesión haga click en CANCELAR"
  );

  if (userResponse) {
    // email = prompt("Por favor ingrese su email");
    // password = prompt("Por favor ingrese su contraseña");
    // const name = prompt("Por favor ingrese su nombre");

    // const id = users.length + 1;

    // const newUser = {
    //   id,
    //   name,
    //   age: 20,
    //   email,
    //   password,
    // };

    // console.log(newUser);

    // //Agregar el nuevo usuario al array users
    // users.push(newUser);

    // console.log(users);

    register();
  } else {
  }
}
