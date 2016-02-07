var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#greeno-app',
    
//    template: _.template($('#usage-calculator-template').html()),
    
    
    events:{
        'click #submit-usage': 'calculateUsage',
        'click #submit-market': 'submitMarket',
        'click #checkout': 'checkout'
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
        this.$selectedPanel = this.$market.find('input[type="radio"]:checked');
        
        if (this.$selectedPanel && this.$selectedPanel.length){
            this.selectedPanelId = this.$market.find('input[type="radio"]:checked')[0].value;
        
            this.$submitMarket.toggleClass('hidden');
            var batteriesMarketView = new app.BatteriesMarketView();
            batteriesMarketView.render(this.batteryNum);
        }else{
            alert("Pls select one panel first.");
        }
    },
    
    checkout: function(){
        this.$selectedBattery = this.$market.find('input[type="radio"]:checked');
        
        if (this.$selectedBattery && this.$selectedBattery.length){
            this.selectedBatteryId = this.$market.find('input[type="radio"]:checked')[0].value;
        }
        
        this.$checkout.toggleClass('hidden');
//            var checkoutView = new app.CheckoutView();
//            checkoutView.render(this.selectedPanelId, this.selectedBatteryId);
            var batteries = new app.Batteries();
            var panels = new app.SolarPanels();
            panels.fetch(); batteries.fetch();
            var selectedPanel = panels.get(this.selectedPanelId);
            var selectedBattery = batteries.get(this.selectedBatteryId);
            var price = this.panelNum + " * " + selectedPanel.get('price') + " + " + this.batteryNum + " * " + selectedBattery.get('price') + " = ₹" + (this.panelNum * selectedPanel.get('price') + this.batteryNum  *  selectedBattery.get('price'));
            alert("[checked out] panels: " + selectedPanel.get('title')  +",  batteris: "+ selectedBattery.get('title') +", price: " + price);
    }
});