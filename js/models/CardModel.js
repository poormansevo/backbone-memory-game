MG.CardModel = Backbone.Model.extend({

    initialize: function(options) {
        this.set("flipped", false);
        this.set("matched", false);
        this.set("imagePath", options.imagePath || '');
        this.set("value", options.value || undefined);
    },

    flip: function() {
        if(this.get("flipped")) {
            return;
        }
        else {
            this.set("flipped", true);
        }

    },

    destroy: function() {
        //console.log("CardModel.destroy()"); // TEMP
    }

});
