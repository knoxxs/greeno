var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#greeno-app',
    
//    template: _.template($('#usage-calculator-template').html()),
    
    
    events:{
        'click #submit-usage': 'calculateUsage',
        'click #submit-market': 'submitMarket',
        'click #checkout': 'submit'
    },

    initialize: function(){
        this.$usageCalculator = this.$('#usage-calculator');
        
        this.$usageCalculator = this.$('#usage-calculator');
        this.$market = this.$('#market');
        this.$appliance = this.$('#appliance');
        this.$applianceCount = this.$('#appliance-count');
        this.$powerUsage = this.$('#power-usage');
        this.$marketOptions = this.$('#market-options');
        this.$submitMarket = this.$marketOptions.find('#submit-market')
        this.$checkout = this.$marketOptions.find('#checkout')
    },
    
    render: function(){
        this.$usageCalculator.toggleClass('hidden', false);
        this.$market.toggleClass('hidden', true);
        
        return this;
    },
    
    renderSolarPanelMarket: function(){
        this.$usageCalculator.toggleClass('hidden');
        this.$market.toggleClass('hidden');
        
        this.$marketOptions.toggleClass('hidden');
        var solarPanelMarketView = new app.SolarPanelMarketView();
        solarPanelMarketView.render(this.panelNum);
    },
    
    
    calculateUsage: function(){
        var powerUsage = this.$powerUsage.val().trim();

        if (powerUsage){
            //todo calculate for power
        } else{
            //todo calculate for appliance
            var appliance = this.$appliance.val().trim();
            var applianceCount = this.$applianceCount.val().trim();
            
        }
        //todo write the formula here

        this.panelNum = 10;
        this.batteryNum = 1;

        this.renderSolarPanelMarket();
    },
    
    submitMarket: function() {
        //todo find selected panel
        
        this.$submitMarket.toggleClass('hidden');
        var batteriesMarketView = new app.BatteriesMarketView();
        batteriesMarketView.render(this.batteryNum);
    }
});