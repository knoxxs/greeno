app = app || {};


app.BatteriesMarketView = Backbone.View.extend({
    el: '#market',
    
    batteriesTemplate: _.template($('#batteries-market-template').html()),
    
    initialize: function(){
        this.batteries = new app.Batteries();
        
        this.batteries.fetch();
        
        if (!this.batteries.length){
            
            this.batteries.create({
                                    title: 'Solar Battery',
                                    brandName: 'Amaron Quanta ',
                                    image: 'http://d315rp2pq5jxiy.cloudfront.net/products_small/solar/solar-battery/SO.SO73.474247.jpg',
                                    price: 2336
                                });
            this.batteries.create({
                                    title: 'Commercial Smf Battery',
                                    brandName: 'Exide ',
                                    image: 'http://d315rp2pq5jxiy.cloudfront.net/products_small/solar/solar-battery/SO.SO73.475686.jpg',
                                    price: 1840
                                });
            this.batteries.create({
                                    title: 'Commercial Smf Battery',
                                    brandName: 'Exide',
                                    image: 'http://d315rp2pq5jxiy.cloudfront.net/products_small/solar/solar-battery/SO.SO73.475688.jpg',
                                    price: 4000
                                });
        }
    },
    
    render: function(batteryNum){
        this.$el.html( this.batteriesTemplate( { batteryNum: batteryNum } ));
        
        this.$listing = this.$el.find('.listing');
        
        this.renderListings(this.$listing, this.batteries);
    },
    
    renderListings: function($listing, products){
        products.each(this.renderProduct, this);
    },
    
    renderProduct: function(product){
        var productView = new app.ProductView({model: product});
        this.$listing.append(productView.render().el);
    }
})