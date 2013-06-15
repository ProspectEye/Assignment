var ProspectEye = {

    selectMenuItem: function(menuItem) {
        $('.navbar .nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }

};

// this is the routing table and how the views should be rendered
ProspectEye.Router = Backbone.Router.extend({

    routes: {
        "":                 "leads"
    },

    leads: function () {
        // iterate over the leads in render them
        _leads.each(function(lead){
            var view = new ProspectEye.LeadView({ model: lead });
            $('#content').append(view.render().el);

        }, this);

        // set the lead-topmenu to active
        ProspectEye.selectMenuItem('lead-menu');
    }

});

$(document).on("ready", function () {
    ProspectEye.router = new ProspectEye.Router();
    Backbone.history.start();
});