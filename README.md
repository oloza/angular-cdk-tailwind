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
