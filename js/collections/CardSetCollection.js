MG.CardSetCollection = Backbone.Collection.extend({

    model: MG.CardModel,

    initialize: function() {

    },

    shuffleCards: function() {
        this.reset(this.shuffle(), {silent: true});
    },

});
