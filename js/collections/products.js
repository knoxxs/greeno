var app = app || {};

app.Products = Backbone.Collection.extend({
    model: app.Product,
    
    localStorage: new Backbone.LocalStorage('todos-backbone')
});