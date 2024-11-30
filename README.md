========
Angular CDK
========
component dev kit
hace parte de la parte del ecosistema Angular

Material design ya diseñado por google
otras compañias tiene su sistema de diseño
Carbon Design System de IBM

CDK,andamiaje de crear la gran aplicación
existen varial librearias 
ionic,primeNg ng bootstrap wijmo, material, kendo UI, Clarity

el CDK es agnostico, no tiene un estilo visual definido es una serie de 
	funcialiedades
	servidios
sin un estilo "opinionado"

========
Instalando Angular CDK y TailwindCSS
========
tailwindcss es un nuevo framework de css, como bootstrap 
a partir de utilidades clases se podra hacerla maquetación
no se escribe mucho css, es mucho más verbose, utilizar buenas practicas se puede jugar con el playgroudn

ng new trello-clone
... add angular routing? yes
SCSS ->sass

si no te sale el modo interactivo colocar:
ng new trello-clone --routing --style=scss

install tailwind

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

-config tailwind.config.js
content: [
    "./src/**/*.{html,ts}",
  ],


 -addind to Css
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

-in app.component.html
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
-install extension tailwind css intellisence

-instalar angular cdk
ng add @angular/cdk

angular cdk para la parte interactiva

========
Maquetando la pagina de login con tailwind
========
-logo library
https://atlassian.design/resources/logo-library

atlassian dueña de jira,bitbucket,trello y otros

-fondos
https://undraw.co/illustrations

-crear la pagina de login
ng g c pages/login --style=none --skip-tests
========
Maquetando el formulariod
========
-hay algo con los formulario en tailwind no es ????
-hay un plugin para los formulario en tailwind no viene incorporado
	npm install -D @tailwindcss/forms

px-2 py-3  -> padding

========
Creando Btn Component
========
- crear un componente que se pueda reutilizar en toda la aplicación
ejemp
<button class="bg-blue-500 text-white px-2 py-3 rounded">

- para responsive tailwind utiliza mediaQuery
sm:bg-gray-50  (small devices)
lg:w-96	(large devices)
- cear un componente para el boton
ng g c components/btn --style=none --skip-tests

-en el componete coloar el código de boton junto con
<ng-content></ng-content>
- en el componente boton puedes usar  union Type de Typescript
	 @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'; 
- extender colores de tailwind.config.js usando un alias con mas sentido para el developer
		theme: {
			extend: {
			colors: {
				success: colors.green,
				primary: colors.blue
			}
			},
		},

-puedes debugear con el Angular DevTools

========
Reto: Dynamic Colors
========
-caractersisticas que hacen Tailwind 
	hace un limpiado en el bundle
	lee el html y typescript y solo utiliza los estilos escritos sin css extra

	desventajas, 
	de los html y typescript, no reconoce las clases dinamicas  
	una solución es concatenar pero no funciona por que lo hace en tiempo de ejecución
-se debe crear un diccionario explicitopara los colores
	get colors(){
		return {
		'bg-success-700':this.color==='success',
		'bg-primary-700':this.color==='primary',
		'bg-red-700':this.color==='red', 

=============
Creando Overlays
=============
tailwind maquetado stilos
cdk la interaccion

overlay:
	son esos elementos estan flotando en nuestra aplicacio´n,
	ejm. en trello 
		-como menu flotante
		-el menu principal es un tipo de overlay
		-para adminsitrar los estados como menu emergente

ng g c pages/boards --skip-tests --style=none
ng g c components/navBar --skip-tests --style=none

-para utilizar cdk
	material.angular.io->CDK
	imoprtar overlay en styles.scss
	@import '@angular/cdk/overlay-prebuilt.css';
	en app-module
	import {OverlayModule} from '@angular/cdk/overlay';

	cdk es agnositico no se mete con como se ve si no con la interacción
	