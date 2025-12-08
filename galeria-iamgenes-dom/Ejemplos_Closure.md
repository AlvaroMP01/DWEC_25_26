# Ejemplos de Closure

- Es la combinación de una función y el ámbito léxico dentro del cual se declaró. En otras palabras, un closure le da a una función acceso a su ámbito exterior, incluso después de que la función externa haya terminado de ejecutarse.

## 1.- Contador Simple

- Crear un closure que recuerde el valor de un contador.

 ```javascript
 export default function createCounter(initialValue = 0) {
    let count = initialValue;
  return {
    //Incrementar
    increment: () => {
        count++;
        console.log("El contador vale:", count);
        return count;
    },
    //decrementar
    decrement: ()=> {
        count--;
        console.log("El contador vale:", count);
        return count;
    },
    // Info del contador
    valueCount: ()=> {
        console.log("El contador vale: ", count);
        return count;
    }
  }
}
```

## 2.- Claro/Oscuro

- Crear un closure que gestione el tema claro/oscuro de una WEB.

```javascript
export default function createThemeManager() {
    let theme= "Light"; //Tema por defecto. Variable Privada

    function setTheme(newTheme){
        if(newTheme!=="light" && newTheme!=="dark"){
            throw new Error("El tema debe ser light o dark");
        }
        theme=newTheme;
        console.log("Tema cambiado. Ahora el tema es: ", theme);
    }

    function getTheme(){
        console.log("El tema actual es" ,theme);
        return theme;
    }

    function toggle(){
        theme = (theme==="light")? "dark" : "light";
        console.log("Tema cambiado. Ahora el tema es: ", theme);
        return theme;
    };

  return {
    setTheme,
    getTheme,
    toggle
  };
}
```

# Funciones Fábrica

-Sirven para crear y devolver objetos o funciones configurados.

## 1.- Creamos dos Botones

```javascript
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
```
