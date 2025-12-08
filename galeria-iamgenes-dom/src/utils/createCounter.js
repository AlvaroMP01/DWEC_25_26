
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
