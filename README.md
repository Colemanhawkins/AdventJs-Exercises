

<img src="https://repository-images.githubusercontent.com/573271128/321221c3-c3f2-445b-9650-bf809ed9a084" width="1012px" heigth="358px" />



## Pagina [AdventJs](https://2022.adventjs.dev/es)

_24 días_ _24 retos de programación_

### 2022

Estas soluciones pueden tener spoilers :warning:

| Reto | Solucion | Enunciado |
|-----------|-------------|-----------|
| [Challenge 1](https://2022.adventjs.dev/es/challenges/2022/1) | [Enlace al repositorio](https://github.com/Colemanhawkins/AdventJs-Exercises/tree/main/Exercises/challenge-01) | [Enlace al enunciado](#ejercicio-1) |
| [Challenge 2](https://2022.adventjs.dev/es/challenges/2022/2) | [Enlace al repositorio](https://github.com/Colemanhawkins/AdventJs-Exercises/tree/main/Exercises/challenge-02) | [Enlace al enunciado](#ejercicio-2) |



## Ejercicio 1 <a name="ejercicio-1"></a>

<font size="+1" color="yellow"> Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea. </font> 

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

```javascript
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
```

<font size="+1" color="yellow">Nota:</font> El carácter \n representa un salto de línea.

<font size="+1" color="yellow">¡Ojo!</font> Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

<font size="+1" color="yellow">Ah, y no modifiques (mutes) el array original.</font>



## Ejercicio 2 <a name="ejercicio-2"></a>



<font size="+1" color="yellow">Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año. </font> 

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

```javascript
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año
```

Cosas a tener en cuenta y consejos:

El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.




