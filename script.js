
    // Player name
    var player1 = "Player 1";
    var player2 = "Player 2";

    var target=30;
    var p1total=0;
    var p2total=0;

    // Function to roll the dice
    function rollTheDice() {
        
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        p1total+=randomNumber1;
        p2total+=randomNumber2;
        
        document.getElementById('img1').innerHTML="<img src='image/loader.gif'>";
        document.getElementById('img2').innerHTML="<img src='image/loader.gif'>";

      
       setTimeout(function (){
            document.getElementById('img1').innerHTML="<img src='image/"+randomNumber1+".png'>";

            document.getElementById('img2').innerHTML="<img src='image/"+randomNumber2+".png'>";


            document.getElementById('p1').innerHTML="<p>"+p1total+" points</p>";
            document.getElementById('p2').innerHTML="<p>"+p2total+" points</p>";

            
            if (p1total === p2total  && (p1total>=target || p2total>=target)) {
               document.querySelector("h1").innerHTML = "Draw!";

               setTimeout(function(){location.reload();},3000)
             }
     
             else if (p2total>=target) {
               document.querySelector("h1").innerHTML
                 = (player2 + " WINS!");

                  setTimeout(function(){location.reload();},3000)

             }
     
             else if(p1total>=target){
               document.querySelector("h1").innerHTML
                 = (player1 + " WINS!");

                 setTimeout(function(){location.reload();},3000)
             }

      },2500)

       
     
    }
