var app = app || {};

app.SolarPanels = Backbone.Collection.extend({
    model: app.SolarPanel,
    
    localStorage: new Backbone.LocalStorage('solar-panels')
});