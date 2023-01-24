//BIENVENIDA:
alert("Welcome, it's Language Time!")

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

//FLUJO DE DECISIONES EN/ES
if (idiomaElegido == "en") {
  //INGLES:
  encuestaIngles()
  cart()
  alert("See you soon!")
} else if (idiomaElegido == "es") {
  //ESPAÑOL
  encuestaEspañol()
  carrito()
  alert("Nos vemos pronto!")
}

//ENCUESTA INGLES
function encuestaIngles() {
  alert("Let's start with a quick survey!")
  let name = prompt("Tell us your full name:")
  let age = parseInt(prompt("How old are you?"))
  let country = prompt("In what country are you currently based?")
  //EXPERIENCIA
  let salir = true
  do {
    let experience = prompt(`Do you have previous experience in english? Choose an option:
    1 - None
    2 - Some
    3 - Much`)
    switch (experience) {
      case "1": experience = "none"
        salir = false
        break
      case "2": experience = "some"
        salir = false
        break
      case "3": experience = "much"
        salir = false
        break
      default: alert("Not a valid option")
    }
    return alert(`Your name is ${name}. You're ${age} years old. You're currently based in ${country}. And you have ${experience} experience in English.`)
  }
  while (salir)
}

//CARRITO INGLES
function cart() {
  let total = 0
  let salirMenu = true
  do {
    let courses = prompt(`We currently offer these packages, please select your option from the list:
    Silver: 1 Class (€14).
    Gold: 4 Classes (€48).
    Platinum: 10 Classes (€120).
    Exit: stop adding items to the cart.`)
    switch (courses.toLowerCase()) {
      case "silver": total = total + 14
        break
      case "gold": total = total + 48
        break
      case "platinum": total = total + 120
        break
      case "exit": salirMenu = false
        break
      default: alert("Not a valid option")
        break
    }
  } while (salirMenu)
  alert(`Your total is: €${total}.`)
  let clear = prompt("Is this ok? Type 'clear' to empty the cart.")
  if (clear.toLocaleLowerCase() == "clear") {
    total = 0
    alert("Sorry we can't provide for you at this time. We promise to extend our offer soon!")
  } else {
    alert(`Your total is: €${total}.`)
  }

}

//ENCUESTA ESPAÑOL
function encuestaEspañol() {
  alert("Empecemos con una pequeña encuesta!")
  let nombre = prompt("Dinos tu nombre completo:")
  let edad = parseInt(prompt("¿Cuantos años tienes?"))
  let pais = prompt("¿En que pais vives actualmente?")
  //EXPERIENCIA
  let salir = true
  do {
    let experiencia = prompt(`Tienes experiencia en el idioma? Elija:
    1 - Ninguna
    2 - Poca
    3 - Mucha`)
    switch (experiencia) {
      case "1": experiencia = "ninguna"
        salir = false
        break
      case "2": experiencia = "poca"
        salir = false
        break
      case "3": experiencia = "mucha"
        salir = false
        break
      default: alert("No es una opción válida")
    }
    return alert(`Tu nombre es ${nombre}. Tienes ${edad} años. Actualmente vives en ${pais}. Y tienes ${experiencia} experiencia en Español`)
  }
  while (salir)
}

//CARRITO
function carrito() {
  let total = 0
  let salirMenu = true
  do {
  let courses = prompt(`Actualmente ofrecemos los siguientes paquetes, por favor elija de la lista:
  Plata: 1 clase (€14).
  Oro: 4 clases (€48).
  Platino: 10 clases (€120).
  Salir: dejar de sumar items al carrito.`)
  switch (courses.toLowerCase()) {
    case "plata": total = total + 14
    break
    case "oro": total = total + 48
    break
    case "platino": total = total + 120
    break
    case "salir": salirMenu = false
    break
    default: alert("No es una opcion valida.")
    break
    }
  } while (salirMenu)
  alert(`Tu total es de: €${total}.`)
  let vaciar = prompt("Estas de acuerdo? Ingresa 'borrar' para vaciar el carrito.")
  if (vaciar.toLowerCase() == "borrar") {
    total = 0
    alert("Sentimos que no nos elijas. Prometemos ampliar nuestra oferta pronto!")
  }
}
