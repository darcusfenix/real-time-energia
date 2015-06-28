# real-time-energia


** Bajar energia y ejecutar el .exe --> http://energia.nu/download/

** seleccionar tarjeta y puerto para Energia

** Código para programar la tarjeta con Energia. Damos en verify y después en upload para programarla.

void setup() {
  Serial.begin(9600); 
}
void loop() {
  float sensorValue = analogRead(A3);
  float sensorValue2 = analogRead(A4);
  float sensorValue3 = analogRead(A1);

  float voltage = sensorValue * (3.0 / 1023.0);  
  float voltage2 = sensorValue2 * (3.0 / 1023.0);  
  float voltage3 = sensorValue3 * (3.0 / 1023.0);  
  Serial.print(voltage);
  Serial.print("/");
  Serial.print(voltage2);
  Serial.print("/");  
  Serial.println(voltage3);
}
// fin del código para programar la tarjeta

nota: las impresiones --> Serial.print("/");   son para hacer un splice en javascript y separar los valores :)

Ya que la tarjeta fue programada pasamos a la parte de node js

requisitos:

1. instalar node js +12  --> https://nodejs.org
3. instalar git --> http://git-scm.com
2. instalar bower -- > http://bower.io

pasos: 

4. descomprimir el proyecto y ubicarse en él con el CMD
5. estando en la raíz teclear --> npm install
6. terminando el paso anterior ubicarse en /public y teclear --> bower install
7. regresar a raíz y para iniciar la apliación teclear --> node app
8. Podemos visualizar la aplicación con localhost:3000


Cambios de confi.

* Estando en la ríz en el archivo app.js en la línea por la 10 cambiar mi COM3 por su puerto asignado
* En /public/js en el archivos script.js cambiar mi ip por localhost o su ip en la línea 1

* Si no tienen la tarjeta no iniciará la aplicación



