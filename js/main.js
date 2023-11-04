//Constantes
const antVirus = 2500
const bkp = 1500


// class constructora
class cita{
    constructor(name, address, nomber, mail) {
        this.nombre = name
        this.direccion = address
        this.celular = nomber
        this.mail = mail
    }
}

let opcion

//Menu
do{
    opcion = prompt("------- Selecione alguna de las siguientes opciones -------\n\n1. Registrate. \n2. Revision de tu notebook. \n3. Realización de Backups. \n4. Instalación de antivirus.  \n5. Agendar cita.  \n6. Salir.")

    switch(opcion){
        // registrate
        case "1": 
            pedirDatos()
            pedirDatosPass()
            alert("¡Te haz registrado con éxito😎!")
        break;

        // revision notebook
        case "2": 
            let nombre = prompt("¿Nos indicas tu nombre?")
            let tel =prompt("Indicanos tu numero de contacto")
            let mail = prompt("Indicanos tu mail")
            alert("¡Perfecto "+nombre+"!, en breve un operador se estará comunicando con vos.✌️")
        break;

        // realizar backups
        case "3": 
            alert("El costo de un backup por 1Gb de información es de: 💲"+bkp)
            let bak = parseFloat(prompt("Cúantos GB pesa tu información?"))
            bak *= bkp 
            alert("El costo total es de: 💲"+bak)
        break;

        // instalación antivirus
        case "4": 
            alert("Hola, el costo de la instalación del antivirus es de $"+antVirus)
            let maquinas = parseInt(prompt("¿En cuántas computadoras lo instalaremos?"))
            let total = maquinas * antVirus
            alert("El total para las "+maquinas+" maquinas es: 💲"+total)
        break;

        // agendar cita
        case "5": 
            let name = prompt("Ingresa tu nombre")
            let direccion = prompt("Ingresa tu direccion")
            let celular = prompt("Ingresa tu numero de contacto")
            let email = prompt("Ingresa tu email")
            const nuevaCita = new cita(name, direccion, celular, email)
            alert("En minutos nos estaremos comunicando contigo para confirmar el dia de la visita. \n\n¡Muchas Gracias por preferirnos "+nuevaCita.nombre+"!😊")
            console.log(nuevaCita)
        break;

        case "6":
            alert("¡Hasta Luego, vuelve pronto!✌️😊")
        break;
        default: alert("❌Indica una opción valida❌")
    };
}while( opcion != 6 )


// funciones
function pedirDatos(){
    let paso = false
        while (paso == false){
            let user = prompt("Indicanos un usuario")
                if(user == ""){
                    alert("❌El usuario no puede estar vacio.❌")
                }else{
                    let confirmar = prompt("Confirma tu usuario")
                    if (user != confirmar){
                        alert("❌El usuario no coincide, intenta de nuevo")
                    }else{1
                        paso = true
                    }
                }
            }    
    alert("¡Usuario guardado correctamente👍🏻!")
}

function pedirDatosPass(){
    let paso = false
        while (paso == false){
            let pass = prompt("Ingresa una contraseña")
                if(pass == ""){
                    alert("❌La contraseña no puede estar vacia.❌")
                }else{
                    let confPass = prompt("Confirma tu contraseña")
                    if (pass != confPass){
                        alert("❌La contraseña no coincide, intenta de nuevo")
                    }else{1
                        paso = true
                    }
                }
        }    
    alert("¡La contraseña se ha guardado correctamente👍🏻!")
}
