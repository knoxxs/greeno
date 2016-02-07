var app = app || {};

app.Product = Backbone.Model.extend({
    defaults:{
        title: '',
        brandName: '',
        image: '',
        price: ''
    }
})