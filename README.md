# Práctica 4- Contenido[![Build Status](https://travis-ci.org/quinoescobar/sytw_prt_03.svg)](https://travis-ci.org/quinoescobar/sytw_prt_03)

Este repositorio contiene la tercera práctica de la asignatura Sistemas y Tencologías Web desplegada en IAAAS.

La práctica consiste en desplegar el conversor de temperaturas de grados Celsius a grados Farenheit, utilizando IAAAS de la Universidad de la Laguna.

# Tutorial Despliegue en IAAAS


## 1. Acceso a IAAAS
Se accedió a la página Enlace página práctica [iaaas.ull.es](http://iaas.ull.es/) y se inició sessión con la cuenta universitaria Alu0100XXYYZZ con su correspondiente contraseña.

Se comprobó que existiera la máquina virtual: ![VMSYTW](./images/s1.PNG "VMSYTW")
Figura 1.

En la Figura 2, se pueden observar las especificaciones de la máquina virtual asignada:
![VMSYTW2](images/s2.PNG "VMSYTW2")
Figura 2.

Se procedió a Encender la máquina virtual y ejecutar la consola, como se puede ver en la Figura 3.
![VMSYTW3](images/s3.PNG "VMSYTW3")
Figura 3.


## 2. Dirección IP
Se ejecutó el comando:

          $ ifconfig
Se obtuvo la dirección IP , ver Figura 4.
![VMSYTW4](images/s4.PNG "VMSYTW4")
Figura 4.

Con la dirección IP identificada, se procedió a añadir en la máquina local un alias para las conexiones, ver Figura 5  :

          $ ~.ssh/config
![VMSYTW42](images/s42.PNG "VMSYTW42")
Figura 5.

Se comprobó la conexión desde la terminal local:
![VMSYTW6](images/s6.PNG "VMSYTW6")
Figura 6.

## 3.Actualización
Se realizó una actualización de la máquina virtual:
![VMSYTW5](images/s5.PNG "VMSYTW42")
Figura 7.
## 4. Clonación
Se clonó el repositorio de la práctica 3 :
![VMSYTW7](images/s7.PNG "VMSYTW7")
Figura 8.
## 5. Instalación
Se instaló en la máquina virtual Node Package Manager:
![VMSYTW8](images/s8.PNG "VMSYTW8")
Figura 9.

Al finalizar la instalación de npm, se procedió a instalar todos los paquetes necesarios para el funcionamiento de nuestra aplicación:
![VMSYTW9](images/s9.PNG "VMSYTW9")
Figura 10.

Se instaló node-static, ya que es necesario para el funcionamiento del servidor y no se encontraba en las dependencias de la aplicación:
![VMSYTW10](images/s10.PNG "VMSYTW10")
Figura 11.
## 6. Arrancando servidor

Al finalizar la instalación de las dependencias de la aplicación, se procedió al levantamiento del servidor con el comando:

          $ nodejs static-server.js

Para accedió a la página de la aplicación de la siguiente manera:

          direccionIP:puerto/ruta

          e.g.:http://10.6.128.92:8080/index.html
# Enlaces

Enlace página práctica [Cálculadora temperatura](https://quinoescobar.github.io/sytw_prt_04)

Enlace página Desplegada [Cálculadora temperatura](http://10.6.128.92:8080/index.html)

Enlace test de la práctica [Cálculadora temperatura](http://10.6.128.92:8080/tests/)

Enlace página author [Quinoescobar](https://quinoescobar.github.io)
