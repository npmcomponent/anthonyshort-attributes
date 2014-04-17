*This repository is a mirror of the [component](http://component.io) module [anthonyshort/attributes](http://github.com/anthonyshort/attributes). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/anthonyshort-attributes`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
attributes
==========

Get an object of all attributes on a DOM element

## API

    var attributes = require('attributes');
    var el = document.querySeletor('#foo');
    
    var attrs = attributes(el);
    
    /*
    {
        'id': 'foo',
        'class': 'bar',
        'data-component': 'dialog'
    }
    */
