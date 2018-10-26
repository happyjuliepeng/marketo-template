# Marketo Template

Complete redevelopment of dynamic, reusable, responsive Marketo module-based template to enable easy webpage implementation and intuitive customization. I started developing the responsive template with reusable modules on my local machine using SASS, Bootstrap and Gulp. Then, I moved it to the Marketo environment, and replaced SASS variables and other page elements with Marketo syntax to make it dynamic.

Users can change the text color, panel background color, content copy, images, videos, icons etc on the fly by using the newly developed WYSIWYG system. Also, the height for each panel and site elements is dynamic so the users don’t need to worry about the copy limitation, the image height etc because the height grows or shrinks with the copy, image or any elements.

This template used the [Sass Essential Training](https://github.com/planetoftheweb/sassEssentials) as a starting point, primarily for the grunt build system and SASS compilation.

## Installing
1. Make sure you have these installed
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
	- [ruby](http://gulpjs.com/)
2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) `> git clone CLONEURL`
3. CD to the folder `cd FOLDERNAME`
4. Run `> npm install` to install the project dependencies
5. Run `> grunt` to start live preview server
