$(document).ready(function() {

    var cardSetCollection = new MG.CardSetCollection([
        new MG.CardModel({value: '1', matched: false, imagePath: 'images/bargs.jpeg'}),
        new MG.CardModel({value: '1', matched: false, imagePath: 'images/bargs.jpeg'}),
        new MG.CardModel({value: '2', matched: false, imagePath: 'images/coorslight.jpeg'}),
        new MG.CardModel({value: '2', matched: false, imagePath: 'images/coorslight.jpeg'}),
        new MG.CardModel({value: '3', matched: false, imagePath: 'images/duff.jpeg'}),
        new MG.CardModel({value: '3', matched: false, imagePath: 'images/duff.jpeg'}),
        new MG.CardModel({value: '4', matched: false, imagePath: 'images/fattire.jpeg'}),
        new MG.CardModel({value: '4', matched: false, imagePath: 'images/fattire.jpeg'}),
        new MG.CardModel({value: '5', matched: false, imagePath: 'images/guinness.jpeg'}),
        new MG.CardModel({value: '5', matched: false, imagePath: 'images/guinness.jpeg'}),
        new MG.CardModel({value: '6', matched: false, imagePath: 'images/miller.jpeg'}),
        new MG.CardModel({value: '6', matched: false, imagePath: 'images/miller.jpeg'}),
        new MG.CardModel({value: '7', matched: false, imagePath: 'images/oldmilwaukee.jpeg'}),
        new MG.CardModel({value: '7', matched: false, imagePath: 'images/oldmilwaukee.jpeg'}),
        new MG.CardModel({value: '8', matched: false, imagePath: 'images/8-bit.jpeg'}),
        new MG.CardModel({value: '8', matched: false, imagePath: 'images/8-bit.jpeg'})
    ]);

    var gameModel = new MG.GameModel({cardSet: cardSetCollection});
    var gameBoardView = new MG.GameBoardView({model: gameModel});
    $('#appContent').html(gameBoardView.el);

});
