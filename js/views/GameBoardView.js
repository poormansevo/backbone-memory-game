MG.GameBoardView = Backbone.View.extend({

    className: 'board',

    initialize: function(options) {
        // shuffle card set
        this.model.get("cardSet").shuffleCards();

        // Listen for card flip event
        MG.vent.on("cardFlippedEvent", this.checkMatch, this);

        this.render();
    },

    checkMatch: function(card) {
        var that = this;

        if(that.model.get("cardsClicked") < 2) {
            that.model.set("cardsClicked", that.model.get("cardsClicked") + 1);
            card.model.flip();
        }
        if(that.model.get("cardsClicked") == 2 && that.model.get("inprogress") == false) {
            that.model.set("inprogress", true);
            setTimeout(function() {
                var flippedCards = that.model.get("cardSet").where({flipped: true, matched: false});
                if(flippedCards[0].get("value")  == flippedCards[1].get("value")) {
                    setTimeout(function() {
                        flippedCards[0].set("matched", true);
                        flippedCards[1].set("matched", true);
                        that.model.set("cardsClicked", 0);
                        that.model.set("inprogress", false);
                    }, 400);
                } else {
                    setTimeout(function() {
                        flippedCards[0].set("flipped", false);
                        flippedCards[1].set("flipped", false);
                        that.model.set("cardsClicked", 0);
                        that.model.set("inprogress", false);
                    }, 400);
                }
            }, 700);
        }


    },

    render: function() {
        // Iterate through our card models and build card views on our gameboard view
        var el = $(this.el);
        var cardModels = this.model.get("cardSet");

        cardModels.each(function(cardModel) {
            var cardView = new MG.CardView({model: cardModel});
            // Add a card to the gameboard
            el.append(cardView.el);
        });

    },

    destroy: function() {
        // Stop listening for event on view
        MG.vent.off("cardFlippedEvent");
        
        this.remove();
        this.unbind();
    }

});
