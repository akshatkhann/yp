class Question{

    constructor(){
       
    
    }
    
    async submit(){
        if(gameState===0){
           quizsubmite= new Constant()
            var quizsubmitedRef= await database.ref("quizsubmited").once("value")
        if(quizsubmitedRef.exists()){
        
            quizsubmited=quizsubmitedRef.val()
         
            quizsubmite.getsubmited()
        }
    
    
    }
    
    
    
    
    }
  
        
      
  
    display(){
    this.title=createElement("h2")
    this.question=createElement("h2")
  
    this.title.html("My Quiz Game");
    this.title.position(350,0);
    this.question.html("Qestion:- What starts and with letter E,but has only one letter ?");
    this.question.position(150,80);
    this.option1=createButton("1: Everyone");
    this.option1.position(150,150);
    this.option2=createButton("2: Envelope");
    this.option2.position(150,200);
    this.option3=createButton("3: Estimate")
    this.option3.position(500,150)
    this.option4=createButton("4: Examaple")
    this.option4.position(500,200)
   
    


    this.option1.mousePressed(()=>{
        this.cancle=createButton("cancle")
        this.cancle.position(300,300)
        this.submite=createButton("submite")
        this.submite.position(150,300)
    

    this.submite.mousePressed(()=>{
      




        game= new Constant()
       
        game.updateanswer(1)
       
        quizsubmited+=1

        game.updateSubmite(quizsubmited)     
        this.cancle.hide()
    this.submite.hide()
this.r=createElement()
this.r.html("waiting for other players for submiting")
this.r.position(350,500)    

})
   
this.cancle.mousePressed(()=>{

    this.cancle.hide()
    this.submite.hide()


})


})
   





   
this.option2.mousePressed(()=>{
    this.cancle=createButton("cancle")
    this.cancle.position(300,300)
    this.submite2=createButton("submite")
    this.submite2.position(150,300)


this.submite2.mousePressed(()=>{
   
    game= new Constant()
    quizsubmited+=1
    game.updateanswer(2)

    game.updateSubmite(quizsubmited)     
    this.cancle.hide()
this.submite2.hide()
this.r=createElement()
this.r.html("waiting for other players for submiting")
this.r.position(350,500)    

})

this.cancle.mousePressed(()=>{

this.cancle.hide()
this.submite2.hide()


})


})

this.option3.mousePressed(()=>{
    this.cancle=createButton("cancle")
    this.cancle.position(300,300)
    this.submite3=createButton("submite")
    this.submite3.position(150,300)


this.submite3.mousePressed(()=>{
    
    game= new Constant()
    quizsubmited+=1
    game.updateanswer(3)

    game.updateSubmite(quizsubmited)     
    this.cancle.hide()
this.submite3.hide()
this.r=createElement()
this.r.html("waiting for other players for submiting")
this.r.position(350,500)    

})

this.cancle.mousePressed(()=>{

this.cancle.hide()
this.submite3.hide()


})


})













this.option4.mousePressed(()=>{
    this.cancle=createButton("cancle")
    this.cancle.position(300,300)
    this.submite4=createButton("submite")
    this.submite4.position(150,300)


this.submite4.mousePressed(()=>{
   

    game= new Constant()
    quizsubmited+=1
    game.updateanswer(4)
    game.updateSubmite(quizsubmited)     
    this.cancle.hide()
this.submite4.hide()
this.wa=createElement()
this.wa.html("waiting for other players for submiting")
this.wa.position(350,500)    

})

this.cancle.mousePressed(()=>{

this.cancle.hide()
this.submite4.hide()


})


})



if(quizsubmited===4){
    this.end()
      
      
      
      
      }
  }
  
  
  
  end(){
  this.t=createElement("h2")
  this.t.html("result")
  this.t.position(500,200)
  this.wa.hide()
  this.player1=createElement("h2")
  this.player1.html()
  
  
  
  
  
  }
  












}











