var app = app || {};

app.Batteries = Backbone.Collection.extend({
    model: app.Battery,
    
    localStorage: new Backbone.LocalStorage('batteries')
});