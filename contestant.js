class Constant{
  constructor(){}

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }
  getsubmited(){
    var quizsubmitedRef = database.ref('quizsubmited');
    quizsubmitedRef.on("value",function(data){
      quizsubmited = data.val();
    })
  }
  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }
  updatename(name){
    var playerIndex = "players/player" + contestantCount
    database.ref(playerIndex).set({
      name:name
  
    });
  }
    updateanswer(answer){
      
      var playerIndex = "players/player" + contestantCount
      database.ref(playerIndex).set({
answer:answer


      })

    }




  static getPlayerinfo(){
    var playerinforef=database.ref("players")
    playerinforef.on("value",(data)=>{
    allcontestants=data.val()
    
    
    })


}
update(state){
  database.ref("/").update({
  gameState:state
  
  })

}
getstate(){
  var gameStateref=database.ref("gameState")
  gameStateref.on("value",function 
  (data) {
   gameState=data.val()   
  })
}
    

   

updateSubmite(count){

  database.ref('/').update({
    quizsubmited : count
  });

  
}



  }
