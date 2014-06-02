$(document).ready(function() {

    function startGame () {

        // If we've already played a game, destroy the existing game board
        if (gameBoardView) {
            gameBoardView.destroy();
        }

        var cardSetCollection = new CardSetCollection([
            new CardModel({value: '1', matched: false, imagePath: 'images/bargs.jpeg'}),
            new CardModel({value: '1', matched: false, imagePath: 'images/bargs.jpeg'}),
            new CardModel({value: '2', matched: false, imagePath: 'images/coorslight.jpeg'}),
            new CardModel({value: '2', matched: false, imagePath: 'images/coorslight.jpeg'}),
            new CardModel({value: '3', matched: false, imagePath: 'images/duff.jpeg'}),
            new CardModel({value: '3', matched: false, imagePath: 'images/duff.jpeg'}),
            new CardModel({value: '4', matched: false, imagePath: 'images/fattire.jpeg'}),
            new CardModel({value: '4', matched: false, imagePath: 'images/fattire.jpeg'}),
            new CardModel({value: '5', matched: false, imagePath: 'images/guinness.jpeg'}),
            new CardModel({value: '5', matched: false, imagePath: 'images/guinness.jpeg'}),
            new CardModel({value: '6', matched: false, imagePath: 'images/miller.jpeg'}),
            new CardModel({value: '6', matched: false, imagePath: 'images/miller.jpeg'}),
            new CardModel({value: '7', matched: false, imagePath: 'images/oldmilwaukee.jpeg'}),
            new CardModel({value: '7', matched: false, imagePath: 'images/oldmilwaukee.jpeg'}),
            new CardModel({value: '8', matched: false, imagePath: 'images/8-bit.jpeg'}),
            new CardModel({value: '8', matched: false, imagePath: 'images/8-bit.jpeg'})
        ]);
    
        var gameModel = new GameModel({cardSet: cardSetCollection});
        var gameBoardView = new GameBoardView({model: gameModel});
        $('#appContent').html(gameBoardView.el);
    }

    $("#restart").click(function() {
        //console.log("restart game"); // TEMP
        startGame();
    });

    // Initialize the game
    startGame();

});

