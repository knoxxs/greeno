app = app || {};


app.SolarPanelMarketView = Backbone.View.extend({
    el: '#market',
    
    solarPanelTemplate: _.template($('#solar-panel-market-template').html()),
    
    initialize: function(){
        this.solarPanels = new app.SolarPanels();
        
        this.solarPanels.fetch();
        
        if (!this.solarPanels.length){
            this.solarPanels.create({
                                    title: 'Solar SolarPV',
                                    brandName: 'LV',
                                    image: 'https://d315rp2pq5jxiy.cloudfront.net/products/solar/polycrstalline-solar-panels/SO.PO.349453.jpg',
                                    price: 5208
                                });
            
            this.solarPanels.create({
                                    title: 'Polycrystalline Solar Module',
                                    brandName: 'Navaid-SunStar',
                                    image: 'http://n2.sdlcdn.com/imgs/a/r/w/Sunstar-1215-Solar-Panels-SDL879741320-1-08293.jpg',
                                    price: 4311
                                });
            
            this.solarPanels.create({
                                    title: 'Polycrystalline Solar Panel',
                                    brandName: 'Su-kam',
                                    image: 'https://d315rp2pq5jxiy.cloudfront.net/products/solar/polycrstalline-solar-panels/SO.PO.377533.JPG',
                                    price: 100
                                });
        }
    },
    
    render: function(panelNum){
        this.$el.html( this.solarPanelTemplate( { panelNum: panelNum } ));
        
        this.$listing = this.$el.find('.listing');
        
        this.renderListings(this.$listing, this.solarPanels);
    },
    
    renderListings: function($listing, products){
        products.each(this.renderProduct, this);
    },
    
    renderProduct: function(product){
        var productView = new app.ProductView({model: product});
        this.$listing.append(productView.render().el);
    }
})