ProspectEye.LeadView = Backbone.View.extend({

    // A lead is wrapped around this tag
    //tagName: '',
    template: function(attributes) {
        return _.template( $("#leads_template").html(), attributes );
    },

    initialize: function () {
        // if the model changes, the view will re-render
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        // Create the HTML with a template
        // send the model attributes to the template in order to fill the variables int the template
        // eg. <% companyName %>

        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});