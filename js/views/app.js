var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#greeno-app',
    
    template: _.template($('#usage-calculator-template').html()),
    
    events:{
        'click #calculate-usage': 'calculateUsage'
    },
    
    initialize: function(){
        this.$usageCalculator = this.$('#usage-calculator');
        
        this.products = new app.Products();
        
        this.products.create({
                                title: 'Sample solar panel',
                                brandName: 'SampleBrand ',
                                image: '',
                                price: 122
                            });
        
        this.$market = this.$('#market ul');
    },
    
    render: function(){
        this.$usageCalculator.html(this.template( {panelNum: this.panelNum, billReduction: this.billReduction} ));
        
        if (this.panelNum && this.billReduction){
            this.products.each(this.renderProduct, this);
        }
        
        this.$billUsage = this.$('#bill-usage');
    },
    
    renderProduct: function(product){
        var productView = new app.ProductView({model: product});
        this.$market.append(productView.render().el);
    },
    
    calculateUsage: function(){
        var billUsage = this.$billUsage.val().trim();
        
        //todo write the formula here
        
        this.panelNum = 1;
        this.billReduction = 100;
        
        this.render();
    }
});