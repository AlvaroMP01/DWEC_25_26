# Ejercicio LocalStorage con JavaScript

## Metodos para el LocalStorage

- Insertar:

```javascript
localstorage.setItem("calve_string", "valor_string");
localstorage.setItem("nombre", "Álvaro");
localstorage.setItem("cp", "18014");
localstorage.setItem("admin", "false");
```

- Sacar o buscar en el LocalStorage:

```javascript
localstorage.getItem("nombre_de_la_clave_a_buscar");
localstorage.getItem("nombre"); // <- devuelve "Álvaro"
localstorage.getItem("isAdmin"); // <- devuelve "false"
```

- Eliminar un elemento del LocalStorage:

```javascript
localstorage.removeItem("nombre_de_la_clave_a_eliminar");
localstorage.removeItem("cp"); // <- elimina la clave "cp"
localstorage.removeItem("admin"); // <- elimina la clave "admin"
```

- Limpiar todo el LocalStorage:

```javascript
localstorage.clear(); // <- elimina todo el LocalStorage
```

- Acceder al indice del LocalStorage:

```javascript
localstorage.key(indice_que_quiero_sacar);
localstorage.key(0); // <- devuelve la clave en el indice 0, en este caso sería "nombre"
localstorage.key(1); // <- devuelve la clave en el indice 1, en este caso sería "cp"
```

- Tamaño del LocalStorage:

```javascript
localstorage.length; // <- devuelve el número de elementos en el LocalStorage
```
