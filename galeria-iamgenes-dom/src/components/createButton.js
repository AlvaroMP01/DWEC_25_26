/*
config = {
    text: "Botón", 
    disable: false,
    className: "px-4 py-2 bg-blue-500 text-white rounded",
    type: "button",
    onClick: ()=> console.log("Has usado el click")
}
 */

export default function createButton(config={}) {
    // const {} = config;
    //Config por defecto creada por mi y hacemos destucturing

    const {
    text= "Botón", 
    disabled= false,
    className= "px-4 py-2 bg-blue-500 text-white rounded",
    type= "button",
    onClick= ()=> console.log("Has usado el click")
    } = config;

    //Para crear un botón usando el DOM createElement("button")
    const button = document.createElement("button");
    button.type=type;
    button.textContent=text;
    button.className=className;
    button.disabled=disabled;

    //Siempre, siempre devolver el botóón
    return button;
}