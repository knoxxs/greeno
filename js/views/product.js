var app = app || {};


app.ProductView = Backbone.View.extend({
    tagName: 'li',
    
    template: _.template($('#product-template').html()),
    
    initialize: function(){},
    
    render: function(){
        this.$el.html( this.template(this.model.attributes));
        
        return this;
    }
    
});