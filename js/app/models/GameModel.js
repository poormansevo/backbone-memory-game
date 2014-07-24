// Copyright (C) 2014 Steven Richardson steven.richardson25@gmail.com
define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');


    return Backbone.Model.extend({

        initialize: function(options) {
            this.set("cardsClicked", 0);
            this.set("cardSet", options.cardSet || new CardSetCollection);
            this.set("isMatching", false);
        },

        destroy: function() {
            //console.log("GameModel.destroy()"); // TEMP
        }
    });

});
