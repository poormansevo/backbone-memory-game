MG.CardView = Backbone.View.extend({

    className: 'card',

    events: {
        "click": "cardFlipped"
    },

    initialize: function(options) {
        this.model.on("change:flipped", this.flipCard, this);
        this.model.on("change:matched", this.removeMatchedCards, this);
        this.render();
    },

    cardFlipped: function(e) {
        e.preventDefault();
        if(this.model.get("flipped")) {
            return;
        }
        MG.vent.trigger("cardFlippedEvent", this);
    },

    render: function() {
        var html = '<div class="front"></div><div class="back"></div>';
        $(this.el).append(html);
        $(this.el).find("div.back").css({"background-image": "url(" + this.model.get("imagePath") + ")", "background-size": "contain", "background-repeat": "no-repeat"});
    },

    flipCard: function() {
        if(this.model.get("flipped")) {
            $(this.el).addClass('flip');
        } else {
            $(this.el).removeClass('flip');
        }
    },

    removeMatchedCards: function() {
        var that = this;
        setTimeout(function() {
            $(that.el).find("div.front").addClass("matched");
            $(that.el).find("div.back").addClass("matched");
            $(that.el).animate({opacity: 0});
            $(that.el).unbind("click");
        }, 300);
    },

    destroy: function() {
        //console.log("CardView.destroy()"); // TEMP
        this.remove();
        this.unbind();
    }

});
