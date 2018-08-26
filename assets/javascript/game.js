// alert box
// alert("Recommended: For best user experience play game in  your browsers full screen mode.");

$(document).ready(function(){
// variables

    //characters {name: "", img: "", hp: "", ap: "", ca: ""}
    var characters = [
        {name: 'Luke Skywalker', img: 'assets/images/Luke_Skywalker.jpg', hp: 120, ap: 15, ca: 15},
        {name: 'Master Yoda', img: 'assets/images/Yoda.jpg', hp: 100, ap: 10, ca: 10},
        {name: 'Darth Sidious', img: 'assets/images/Darth_Sidious.jpg', hp: 130, ap: 20, ca: 20},
        {name: 'Darth Vader', img: 'assets/images/Darth_Vader.jpg', hp: 140, ap: 15, ca: 15},
    ];
    var playerIsChosen = false;
    var enemyIsChosen = false;
    
    // display characters in starting area and turn them into a button that makes stuff happen when you click it
    // get some variables in there to make this easier
    function start(){
        $('.display').hide();
        $('.box').hide();
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
            $('.box').show();
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
    $(document).on('click', '.possibleEnemies', function() {
        if (!enemyIsChosen) {
            $('#gameText').empty();
            var enemy = $(this);
            enemy.addClass('enemyButton').removeClass('possibleEnemies');
            $('#enemy').append(enemy);
            enemyIsChosen = true;
            var p = $('<p>');
            p.append('Attack!');
            $('#gameText').append(p);	
        }
    });
    
        // attack button lets goooooooo
        $(document).on('click', '#attack', function() {
            var playerName = $('#yourCharacter').children().attr('name');
            var playerHP = $('#yourCharacter').children().attr('hp');	
            var playerAP = $('#yourCharacter').children().attr('ap');
            var enemyName = $('#enemy').children().attr('name');
            var enemyHP = $('#enemy').children().attr('hp');
            var enemyCA = $('#enemy').children().attr('ca');
            // check if player and enemy have been chosen and make sure you haven't lost yet, if so:
            if (playerIsChosen && enemyIsChosen && playerHP > 0) {
                $('#gameText').empty();	
                
                // player attacks enemy == (enemy HP) - (player AP)
                enemyHP -= playerAP;
                $('#enemy').children().attr('hp', enemyHP);
                $('#enemy .hpDisplay').text("HP: " + enemyHP);
                
                // enemy counter attacks player == (player HP) - (enemy CA)
                playerHP -= enemyCA;
                $('#yourCharacter').children().attr('hp', playerHP);
                $('#yourCharacter .hpDisplay').text("HP: " + playerHP);
                var p = $('<p>');
                p.append("You attacked " + enemyName + " for " + playerAP + " damage.<br>" + enemyName + " attacked you back for " + enemyCA + " damage.");
                $('#gameText').append(p);
                
                // increase player's AP by base AP
                if ($('#yourCharacter').children().length > 0 && $('#enemy').children().length > 0 && playerHP > 0) {
                    for (var i = 0; i < characters.length; i++) {
                        if (characters[i].name == playerName) {
                            var basePlayerAP = characters[i].ap;
                        }				 
                    }
                    playerAP = parseInt(playerAP) + parseInt(basePlayerAP);
                    $('#yourCharacter').children().attr('ap', playerAP);
                    //hey, let's console log this
                    console.log(playerAP);
                }
                // if enemy's HP < or = 0 remove character and choose new enemy
                if (enemyHP <= 0) {
                    $('#gameText').empty();
                    $('#enemy').empty();
                    enemyIsChosen = false;
                    var p = $('<p>');
                    p.append('You have defeated ' + enemyName + '. CHOOSE YOUR NEXT OPPONENT.');
                    $('#gameText').append(p);
                }
                // player wins by defeating all enemies 
                if ($('#availableEnemies').children().length == 0 && $('#enemy').children().length == 0 && playerIsChosen ) {
                    $('#gameText').empty();
                    $('#attack').hide();
                    var p = $('<p>');
                    p.append('YOU WON!!!!!!!!!!');
                    
                    // restart button appears
                    var br = $('<br>');
                    p.append(br);
                    var b = $('<button>Restart</button>');
                    b.addClass('btn btn-outline-danger btn-lg btn-block raised restart');
                    p.append(b);
                    $('#gameText').append(p);
                }
                // player loses if HP < or = 0
                if (playerHP <= 0) {
                    $('#gameText').empty();
                    $('#attack').hide();
                    var p = $('<p>');
                    p.append('YOU LOSE!!!!!!!!!');
                   
                    // restart button appears
                    var br = $('<br>');
                    p.append(br);
                    var b = $('<button>Restart</button>');
                    b.addClass('btn btn-outline-danger btn-lg btn-block raised restart');
                    p.append(b);
                    $('#gameText').append(p);
                }
            //if player is chosen, enemy is not chosen, and there are enemies still alive:
            // choose an opponent! notification
            } else if (playerIsChosen && !enemyIsChosen && $('#availableEnemies').children().length > 0) {
                $('#gameText').empty();
                var p = $('<p>');
                p.append('CHOOSE YOUR OPPONENT!!!!!');
                $('#gameText').append(p);
            } else if (!playerIsChosen) {
                $('#gameText').empty();
                var p = $('<p>');
                p.append('CHOOSE YOUR CHARACTER!!!!!!!!!!');
                $('#gameText').append(p);
            }
        });

    
        // now let's restart because this game is too good not to play over and over again :-)
        $(document).on('click', '.restart', function() {
            playerIsChosen = false;
            enemyIsChosen = false;
            $('#allCharacters').empty();
            $('#yourCharacter').empty();
            $('#enemy').empty();
            $('#availableEnemies').empty();
            $('#gameText').empty();
            start();
        });
        
    
    //start game function
    start();
});
