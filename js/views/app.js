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
    },
    
    render: function(){
        this.$usageCalculator.html(this.template( {panelNum: this.panelNum, billReduction: this.billReduction} ));
        
        this.$billUsage = this.$('#bill-usage');
    },
    
    calculateUsage: function(){
        var billUsage = this.$billUsage.val().trim();
        
        //todo write the formula here
        
        this.panelNum = 1;
        this.billReduction = 100;
        
        this.render();
    }
});