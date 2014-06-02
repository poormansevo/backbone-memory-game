define(function(require) {
  
    'use strict';
  
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
  
    // Models
    var CardModel = require('CardModel');


    return Backbone.Collection.extend({
  
        model: CardModel,
    
        initialize: function() {
    
        },
    
        shuffleCards: function() {
            this.reset(this.shuffle(), {silent: true});
        },
    
        destroy: function() {
            //console.log("CardSetCollection.destroy()"); // TEMP
        }
    
    });
  
});
