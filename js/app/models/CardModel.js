// Copyright (C) 2014 Steven Richardson steven.richardson25@gmail.com
define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');


    return Backbone.Model.extend({

        initialize: function(options) {
            this.set("flipped", false);
            this.set("matched", false);
            this.set("imagePath", options.imagePath || '');
            this.set("value", options.value || undefined);
        },

        destroy: function() {
            //console.log("CardModel.destroy()"); // TEMP
        }

    });

});
