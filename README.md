# VD Modal

> VD Modal is a easy to use modal for angularjs application. one modal at a time.

![vd modal easy to use angularjs modal one modal at a time](https://cloud.githubusercontent.com/assets/762639/23389341/379f1c18-fd46-11e6-9ae3-5e63d56d861a.png)

This is another modal component using angularJs framework. This modal wants to be simple and easy to use.

* VD Modal opens one modal at a time, never shows two modals at same time.
* All your modal content is only attached to your document after modal popups, it means your modal **will not ** be hidden using css `display: none` or angular `ng-show` features. And this can be good to your SEO. 
* VD Modal was made with love by <a href="https://www.vivadecora.com.br">Viva Decora</a> front end team.


## Table of contents

* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [Column modal](#column-modal)
* [General api options](#api-options)
* [Most important css classes](#css)
* [License](#license)

<h2 id="installation"> Installation </h2>

### 1. Install VD modal as a npm package:

```shell
$ npm install --save vd-modal
``` 

Or use it from unpackage cdn, from this url:

> https://unpkg.com/vd-modal@0.0.1/dist/js/vd-modal.min.js

### 2. Insert javascript and css from vd-modal.

```html
<script src="/path/to/vd-modal/dist/js/vd-modal.min.js" type="application/javascript"></script>
<link rel="stylesheet" href="/path/to/vd-modal/dist/css/vd-modal.css">
``` 

### 3. Inject vd-modal module to your application.

```javascript
"use strict"

(function(){
	angular.module("my-application", ["vd-modal"]);
})();
``` 

<h2 id="basic-usage"> Basic Usage </h2>

Create your modal by using `ModalModel` factory. `ModalModal` provides a function called `getContructor(nameOfYourModal)` that you can use to create new instances of your modals, like that:

```javascript
"use strict"

(function(){
	angular.module("my-application").controller("mainController", function(ModalModel){
		var vc = this;
		vc.helloWorlModal = new ModalModel.getConstructor("hello-world");
		vc.openHelloWorlModal = function(){
			vc.helloWorlModal.isOpen = true;
		}
	});
})();	
```

After you do id, create your own `<modal>` in html wrapping any content you need:

```html
<body ng-app="my-application">
	<modal model="vc.helloWorlModal">
		<h1>Hello world!</h1>
		<p> This is my first modal using VD modal </p>
	</modal>
	<main ng-controller="mainController">
		<button ng-click="vc.openHelloWorlModal()"></button>
	</main>
</body>	
```

<h2 id="basic-usage"> Column modal </h2>
<h2 id="api-options"> General Api Options </h2>
<h2 id="css"> Most important css classes </h2>
<h2 id="license">License</h2>

VD modal is licensed under MIT. [https://github.com/vivadecora/vd-modal/blob/master/LICENSE](see more).
