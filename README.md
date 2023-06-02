
![Ginebra Gourmet](https://github.com/Hilicarolina/SCL017-card-validation/assets/14808063/725a7c93-f2ef-434c-86e0-d062e45fc2d3)

## Índice
- [1. Preámbulo](#item1)
- [2. Resumen del proyecto](#item2)
- [3. Definición del producto](#item3)
- [4. Demo](#item4)
- [5. Enlace](#item5)


<a name="item1"></a>
### 1. Preámbulo
[El algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn#:~:text=El%20algoritmo%20de%20Luhn%20o,cr%C3%A9dito%2C%20n%C3%BAmeros%20IMEI%2C%20etc.), también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

![EjemploLuhn](https://github.com/Hilicarolina/SCL017-card-validation/assets/14808063/b3b2421d-0494-4ea4-a1d1-0ff9839d5f49)


<a name="item2"></a>
### 2. Resumen del proyecto

_Ginebra & Gourmet_, es una aplicación web, con la estructura de un portal de pago, que permite validar/rechazar y enmascarar los dígitos de una tarjeta de crédito ingresada por un usuario. La validación de la tarjeta se hace implementando, mediante código, el algoritmo de Luhn. En esta aplicación también se implementa la funcionalidad para ocultar todos los dígitos ingresados, menos los últimos cuatro.

<a name="item3"></a>
### 3. Definición del producto

Los usuarios a los que va dirigida la aplicación son aquellos que deseen pagar algún
servicio adquirido en un restaurant ficticio llamado _"Ginebra & Gourmet"_.

Para definir la interfaz que tendría la aplicación, se investigó varios portales de pago de distintas páginas web. De cada uno de ellos se tomó lo que, a criterio personal, parecía más funcional en este tipo de aplicaciones, como por ejemplo, los colores, validación de datos para corroborar los mismo una vez que el usuario los introduzca. 

<a name="item4"></a>
### 4. Demo
A continuación, se puede visualizar un video sobre el flujo de la aplicación cuando es admisible, y cuando no, el número de Tarjeta introducido por el usuario:

https://github.com/Hilicarolina/SCL017-card-validation/assets/14808063/c9150e20-b96d-4996-bb7d-5f3438e913e9

<a name="item5"></a>
### 5. Enlace
https://hc-angulo.github.io/SCL017-card-validation/

