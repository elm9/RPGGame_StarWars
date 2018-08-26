// alert box
// alert("Recommended: For best user experience play game in  your browsers full screen mode.");

$(document).ready(function(){
// variables

    //characters {name: "", img: "", hp: "", ap: "", ca: ""}
    var characters = [
        {name: 'Luke Skywalker', img: 'assets/images/Luke_Skywalker.jpg', hp: 100, ap: 15, ca: 15},
        {name: 'Master Yoda', img: 'assets/images/Yoda.jpg', hp: 80, ap: 25, ca: 25},
        {name: 'Darth Sidious', img: 'assets/images/Darth_Sidious.jpg', hp: 140, ap: 20, ca: 20},
        {name: 'Darth Vader', img: 'assets/images/Darth_Vader.jpg', hp: 180, ap: 25, ca: 25},
    ];
    var playerIsChosen = false;
    var enemyIsChosen = false;
    
    // display characters in starting area and turn them into a button that makes stuff happen when you click it
    // get some variables in there to make this easier
    function start(){
        $('.display').hide();
        for (var i = 0; i < characters.length; i++) {
            var b = $('<button>');
            b.addClass('characterButton');
            b.attr('name', characters[i].name);
            b.attr('hp', characters[i].hp);
            b.attr('ap', characters[i].ap);
            b.attr('ca', characters[i].ca);
            b.append("<p>" + characters[i].name + "</p><img src='" + characters[i].img + "' class='characterImage'> <br> <p class ='hpDisplay'> HP: " + characters[i].hp + "</p>");
            $('#allCharacters').append(b);
        }
        var p = $('<p>');
        p.append('CHOOSE YOUR CHARACTER.');
        $('#gameText').append(p);
    }
    
    // choose player
    $(document).on('click', '.characterButton', function() {
        if (!playerIsChosen) {
            $('#gameText').empty();
            $('.display').show();
            var player = $(this);
            player.addClass('player');
            $('#yourCharacter').append(player);
            playerIsChosen = true;
            $('#availableEnemies').append($('#allCharacters').children().addClass('possibleEnemies'));
            var p = $('<p>');
            p.append('CHOOSE YOUR OPPONENT.');
            $('#gameText').append(p);
        }
    });
    
    // choose enemy
    
    
        // attack button
            // check if player and enemy have been chosen, if so:
                // player attacks enemy == (enemy HP) - (player AP)
                // enemy counter attacks player == (player HP) - (enemy CA)
                // increase player's AP by base AP
                // if enemy's HP < or = 0 remove character and choose new enemy
                // player wins by defeating all enemies 
                    // restart button appears
                // player loses if HP < or = 0
                    // restart button appears
            //if player is chosen, enemy is not chosen, and there are enemies still alive:
                // please choose an enemy! notification
    
    
        // restart button
        
    
    //start game function
    start();
});
