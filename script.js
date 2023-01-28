//BIENVENIDA:
alert("Welcome to One Click!")

//SELECTOR DE IDIOMA:
let idiomaElegido
idioma();
function idioma() {
  let salir = true
  do {
    let toggler = parseInt(prompt(`Please choose your language/Por favor elige tu lenguaje:
    1 - English
    2 - Español`))
    switch (toggler) {
      case 1: idiomaElegido = "en"
      salir = false
      break
      case 2: idiomaElegido = "es"
      salir = false
      break
      default: alert("Not a valid option/Opción no válida.")
    }
  } while (salir)
}


//ENCUESTA INGLES
const newPupil = {
  name: "",
  age: 0,
  country: "",
  experience: ""
}

function encuestaIngles() {
  alert("Let's start with a quick survey!")
  newPupil.name = prompt("Tell us your full name:")
  newPupil.age = parseInt(prompt("How old are you?"))
  newPupil.country = prompt("In what country are you currently based?")
  //EXPERIENCIA
  let salir = true
  do {
    newPupil.experience = prompt(`Do you have previous experience in english? Choose an option:
    1 - None
    2 - Some
    3 - Much`)
    switch (newPupil.experience) {
      case "1": newPupil.experience = "none"
      salir = false
      break
      case "2": newPupil.experience = "some"
      salir = false
      break
      case "3": newPupil.experience = "much"
      salir = false
      break
      default: alert("Not a valid option")
    }
  }
  while (salir)
  return newPupil
}


//ENCUESTA ESPAÑOL
const nuevoAlumno =  {
  nombre: "",
  edad: 0,
  pais: "",
  experiencia: ""
}

function encuestaEspañol() {
  alert("Empecemos con una pequeña encuesta!")
  nuevoAlumno.nombre = prompt("Dinos tu nombre completo:")
  nuevoAlumno.edad = parseInt(prompt("¿Cuantos años tienes?"))
  nuevoAlumno.pais = prompt("¿En que pais vives actualmente?")
  //EXPERIENCIA
  let salir = true
  do {
    nuevoAlumno.experiencia = prompt(`Tienes experiencia en el idioma? Elija:
    1 - Ninguna
    2 - Poca
    3 - Mucha`)
    switch (nuevoAlumno.experiencia) {
      case "1": nuevoAlumno.experiencia = "ninguna"
      salir = false
      break
      case "2": nuevoAlumno.experiencia = "poca"
      salir = false
      break
      case "3": nuevoAlumno.experiencia = "mucha"
      salir = false
      break
      default: alert("No es una opción válida")
    }
  }
  while (salir)
  return nuevoAlumno
}


//INSTANCIACIÓN DE OBJETOS

class Individual {
  constructor (id, duration, price) {
    this.id = id,
    this.duration = duration,
    this.price = price
  }
}

class Special {
  constructor (id, duration, price) {
    this.id = id,
    this.duration = duration,
    this.price = price
  }
}

const silver = new Individual("silver", "1 class", 14)

const goldInd = new Individual("gold", "4 classes", 56)

const platinumInd = new Individual("platinum", "10 classes", 140)

const goldSp = new Special("gold sp", "1 month", 112)

const platinumSp = new Special("platinum sp", "3 months", 336)

const cursos = [silver, goldInd, platinumInd, goldSp, platinumSp]


//Carrito Ingles:
const cart = []
function addCart (arr) {
  arr.forEach(elem => {
    alert(`Our courses: ${elem.id}, ${elem.duration}, €${elem.price}.`)
  })
  arr.forEach(curso => {
    let add = prompt(`Do you wish to add ${curso.id} to your cart? Yes/No`)
    if (add.toLowerCase() == "yes") {
      cart.push(curso)
    }
  })
  return cart
}

function removeCart (arr) {
  arr.forEach(item => {
    let remove = prompt(`You you want to erase ${item.id} from your cart? Yes/No.`)
    if (remove.toLowerCase() == "yes") {
      cart.pop(item)
    }
  })
  return cart
}

function showCart (arr) {
  if (arr.length == 0) {
    alert("Your cart is empty.")
  } else {
    arr.forEach(elem => {
      alert(`Your cart: ${elem.id}, ${elem.duration}, €${elem.price}.`)
    })
  }
}

function sumTotal(arr) {
  if (arr.length == 0) {
    alert("Your cart is empty.")
  } else if(arr.length == 1) {
    let total = arr.pop()
    return total.price
  } else {
    return arr.reduce((elem, sum) => elem.price + sum.price)
  }
}

//Carrito Español:

//Agregar
const carrito = []
function agregarCarrito (arr) {
  arr.forEach(elem => {
    alert(`Nuestros cursos: ${elem.id}, ${elem.duration}, €${elem.price}.`)
  })
  arr.forEach(curso => {
    let add = prompt(`Desea agregar ${curso.id} a su carrito? Si/No.`)
    if (add.toLowerCase() == "si") {
      carrito.push(curso)
    }
  })
  return carrito
}

//Borrar
function borrarCarrito(arr) {
  arr.forEach(item => {
    let remove = prompt(`Desea borrar ${item.id} de su carrito? Si/No.`)
    if (remove.toLowerCase() == "si") {
      carrito.pop(item)
    }
  })
  return carrito
}

//Mostrar
function mostrarCarrito (arr) {
  if (arr.length == 0) {
    alert("Tu carrito está vacío.")
  } else {
    arr.forEach(elem => {
      alert(`Tu carrito: ${elem.id}, ${elem.duration}, €${elem.price}.`)
    })
  }
}

//Total
function calcularTotal(arr) {
  if (arr.length == 0) {
    alert("Tu carrito está vacío.")
  } else if(arr.length == 1) {
    let total = arr.pop()
    return total.price
  } else {
    return arr.reduce((elem, sum) => elem.price + sum.price)
  }
}

//Buscador:
function buscar (arr) {
  let cursoBuscado = prompt("Ingrese el nombre del curso que desea:")
  let cursoEncontrado = arr.find(curso => curso.id.toLowerCase() == cursoBuscado.toLowerCase())

  if(cursoEncontrado == undefined){
    alert(`${cursoBuscado} no se encuentra en nuestro stock`)
  } else {
    alert(`Encontramos: ${cursoEncontrado.id}, ${cursoEncontrado.duration}, €${cursoEncontrado.price}`)
  }
}

function search (arr) {
  let cursoBuscado = prompt("Please input the ID of the course you're searching:")
  let cursoEncontrado = arr.find(curso => curso.id.toLowerCase() == cursoBuscado.toLowerCase())

  if(cursoEncontrado == undefined){
    alert(`${cursoBuscado} is not in our stock`)
  } else {
    alert(`Found: ${cursoEncontrado.id}, ${cursoEncontrado.duration}, €${cursoEncontrado.price}`)
  }
}

//Menu:
function menu () {
  let salir = false
  if (idiomaElegido == "es") {
    do {
      salir = preguntarOpcionEs(salir)
    } while (!salir)
  } else if (idiomaElegido == "en") {
    do {
      salir = preguntarOpcionEn(salir)
    } while (!salir)
  }
}


//Opcion ES:
function preguntarOpcionEs () {
  let opcion = parseInt(prompt(`Ingrese la opcion deseada:
    1 - Buscar curso
    2 - Agregar al carrito
    3 - Borrar carrito
    4 - Mostrar carrito
    5 - Total
    6 - Salir`))

  switch (opcion) {
    case 1: buscar(cursos)
    break
    case 2: agregarCarrito(cursos)
    break
    case 3: borrarCarrito(carrito)
    break
    case 4: mostrarCarrito(carrito)
    break
    case 5: let total = calcularTotal(carrito)
      alert(`Su total es: €${total.toString()}`)
      salir = true
    break
    case 6: alert("Gracias por elegirnos!")
    salir = true
    return salir
    default: alert("Ingrese una opcion válida")
    break
  }
}

//Opcion EN:
function preguntarOpcionEn () {
  let opcion = parseInt(prompt(`Enter the desired option:
    1 - Search course
    2 - Add to cart
    3 - Remove from cart
    4 - Show cart
    5 - Total
    6 - Close`))

  switch (opcion) {
    case 1: search(cursos)
    break
    case 2: addCart(cursos)
    break
    case 3: removeCart(cart)
    break
    case 4: showCart(cart)
    break
    case 5: let total = sumTotal(cart)
      alert(`Your total is: €${total.toString()}`)
      salir = true
    break
    case 6: alert("Thanks for choosing us")
    salir = true
    return salir
    default: alert("Enter a valid option")
    break
  }
}


//FLUJO DE DECISIONES EN/ES
if (idiomaElegido == "en") {
  // INGLES:
  encuestaIngles()
  alert(`You're name is ${newPupil.name}, you're ${newPupil.age} years old, you're currently based in ${newPupil.country} and you have ${newPupil.experience} in English.`)
  menu()
  alert("See you soon!")
} else if (idiomaElegido == "es") {
  //ESPAÑOL
  encuestaEspañol()
  alert(`Te llamas ${nuevoAlumno.nombre}, tienes ${nuevoAlumno.edad} años, actualmente vives en ${nuevoAlumno.pais} y tienes ${nuevoAlumno.experiencia} experiencia en Español.`)
  menu()
  alert("Nos vemos pronto!")
}