// alert box
// alert("Recommended: For best user experience play game in  your browsers full screen mode.");

// variables

    //characters {name: "", img: "", hp: "", ap: "", ca: ""}
var characters = [
    {name: 'Luke Skywalker', img: '../../images/Luke_Skywalker.jpg', hp: 100, ap: 15, ca: 15},
    {name: 'Master Yoda', img: '../../images/Yoda.jpg', hp: 80, ap: 25, ca: 25},
    {name: 'Darth Sidious', img: '../../images/Darth_Sidious.jpg', hp: 140, ap: 20, ca: 20},
    {name: 'Darth Vader', img: '../../images/Darth_Vader.jpg', hp: 180, ap: 25, ca: 25},
];
var playerIsChosen = false;
var enemyIsChosen = false;

// display characters in starting area


// choose player


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