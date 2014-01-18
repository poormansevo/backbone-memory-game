MG.GameModel = Backbone.Model.extend({

    initialize: function(options) {
        this.set("cardsClicked", 0);
        this.set("cardSet", options.cardSet || new MG.CardSetCollection);
        this.set("inprogress", false);
    },

});
