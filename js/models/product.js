var app = app || {};

var Product = Backbone.Model.extend({
    defaults:{
        title: '',
        brandName: '',
        image: '',
        price: ''
    }
})