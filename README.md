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
