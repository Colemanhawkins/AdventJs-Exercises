

<img src="https://repository-images.githubusercontent.com/573271128/321221c3-c3f2-445b-9650-bf809ed9a084" width="1012px" heigth="358px" />



## Pagina [AdventJs](https://2022.adventjs.dev/es)

_24 días_ _24 retos de programación_

### 2022

Estas soluciones pueden tener spoilers :warning:

| Reto | Solucion | Enunciado |
|-----------|-------------|-----------|
| [Challenge 1](https://2022.adventjs.dev/es/challenges/2022/1) | [Enlace al repositorio](https://github.com/tuusuario/ejercicio1) | [Enlace al enunciado](#ejercicio-1) |



## Ejercicio 1 <a name="ejercicio-1"></a>

# Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

\`\`\`javascript
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
\`\`\`

<font size="+1" color="yellow">Nota:</font> El carácter \n representa un salto de línea.

<font size="+1" color="yellow">¡Ojo!</font> Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

<font size="+1" color="yellow">Ah, y no modifiques (mutes) el array original.</font>


