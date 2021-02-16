class Quiz{


    constructor(){
        this.name=createInput("name")
        this.name.position(400,200)
        this.button=createButton("start Quiz")
        this.button.position(300,200)   
     
         this.greeting=createElement("h2")
       this.greeting.position(350,200)
       this.wait=createElement("h2")
     
    }
   
   
   






    async start(){
        if(gameState===0){
            contestestant= new Constant()
        var contestantCountRef= await database.ref("contestantCount").once("value")
        if(contestantCountRef.exists()){
        
        contestantCount=contestantCountRef.val()
        
        contestestant.getCount()
        }


}




}


display(){
       
    this.button.mousePressed(()=>{
        
var name=this.name.value()
   
       this.button.hide()
            this.name.hide() 
            
            this.wait.html("waiting for 4 players")     
            this.wait.position(350,0)   
            constant= new Constant()
          contestantCount+=1
          this.greeting.html("hello "+name)
          constant.updateCount(contestantCount)
           constant.updatename(name)
    
         
               
        })





        

    }


 

















    




    




hide(){
this.wait.hide()
this.greeting.hide()



}










}