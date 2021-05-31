# Tarjeta de crédito válida


## 1. Introducción.

En este proyecto se construyó una aplicación web con la estructura de un
portal pago que permite validar/rechazar y enmascarar los dígitos de una
tarjeta de crédito ingresada por un usuario.


## 2. Resumen del proyecto

La validadción de la tarjeta se hace implementando, mediante código, el algoritmo
de [Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn#:~:text=El%20algoritmo%20de%20Luhn%20o,cr%C3%A9dito%2C%20n%C3%BAmeros%20IMEI%2C%20etc.), también llamado algoritmo de módulo 10, el cual es un método de verificación que se utiliza para validar números
de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.  
En nuestra aplicación también implementamos la funcionalidad para ocultar todos los
dígitos ingresados menos los últimos cuatro.

### Definición del producto

Los usuarios a los que va dirigida mi aplicación son aquellos que deseen pagar algún
servicio adquirido en un restaurant que, hipotéticamente, he llamado "Ginebra & Gourmet".

Para definir la interfaz que tendría mi aplicación, investigué varios portales de 
pago de distintas páginas web. De cada uno de ellos tomé lo que, a criterio personal,
me pareció más funcional en este tipo de aplicaciones, como por ejemplo, los colores,
validación de datos para corroborar el ingreso de datos que ejecute el usuario. 

[Ver proyecto](https://hilicarolina.github.io/SCL017-card-validation/src/)

