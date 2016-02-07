var app = app || {};

app.Battery = Backbone.Model.extend({
    defaults:{
        title: '',
        brandName: '',
        image: '',
        price: ''
    }
})