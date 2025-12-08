//const myTheme= createThemeManager()
// mytheme.setTheme("dark")
//myTheme.toggle(); <-- Si está "light" lo convierte a "dark", y viceversa

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
