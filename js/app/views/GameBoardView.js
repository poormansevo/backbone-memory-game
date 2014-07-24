define(function(require) {
    // Copyright (C) 2014 Steven Richardson steven.richardson25@gmail.com
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var vent = require('Header');

    // Views
    var CardView = require('CardView');


    return Backbone.View.extend({

        className: 'board',

        initialize: function(options) {
            // shuffle card set
            this.model.get("cardSet").shuffleCards();

            // Listen for card flip event
            vent.on("cardFlippedEvent", this.checkMatch, this);

            this.render();
        },

        checkMatch: function(card) {
            //console.log("checkmatch");

            var that = this;

            if(that.model.get("cardsClicked") < 2) {
                //console.log("cardsClicked < 2");
                that.model.set("cardsClicked", that.model.get("cardsClicked") + 1);
                card.model.set("flipped", true);
            }
            if(that.model.get("cardsClicked") == 2 && that.model.get("isMatching") == false) {
                //console.log("cardsClicked == 2 & isMatching");
                that.model.set("isMatching", true);
                setTimeout(function() {
                    var flippedCards = that.model.get("cardSet").where({flipped: true, matched: false});
                    //console.log("flippedCards[0].get(value): " + flippedCards[0].get("value")); // TEMP
                    //console.log("flippedCards[1].get(value): " + flippedCards[1].get("value")); // TEMP
                    if(flippedCards[0].get("value")  == flippedCards[1].get("value")) {
                        //console.log("matched two cards");
                        setTimeout(function() {
                            flippedCards[0].set("matched", true);
                            flippedCards[1].set("matched", true);
                            that.model.set("cardsClicked", 0);
                            that.model.set("isMatching", false);
                        }, 400);
                    } else {
                        //console.log("cards did not match");
                        setTimeout(function() {
                            flippedCards[0].set("flipped", false);
                            flippedCards[1].set("flipped", false);
                            that.model.set("cardsClicked", 0);
                            that.model.set("isMatching", false);
                        }, 400);
                    }
                }, 800);
            }

        },

        render: function() {
            // Iterate through our card models and build card views on our gameboard view
            var el = $(this.el);
            var cardModels = this.model.get("cardSet");

            cardModels.each(function(cardModel) {
                var cardView = new CardView({model: cardModel});
                // Add a card to the gameboard
                el.append(cardView.el);
            });

        },

        destroy: function() {
            //console.log("GameBoardView.destroy()"); // TEMP

            // Stop listening for event on view
            vent.off("cardFlippedEvent");

            // Destroy all of the Cards
            var cardModels = this.model.get("cardSet");
            cardModels.each(function(cardModel) {
                //console.log("destroying a card model"); // TEMP
                cardModel.destroy();
            });

            // Destroy the GameModel
            this.model.destroy();

            this.remove();
            this.unbind();
        }

        });

});
