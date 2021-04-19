class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Enter Your Name Here....");
        this.input2 = createInput("Enter Correct Option No..");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
      }
    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0);


        this.question.html(" Question:- English Soccer Teams Beginning and Ending With Same Letter ? ")
        this.question.position(150,70);
        this.option1.html("1. Liverpool F.C. ")
        this.option1.position(150,100);
        this.option2.html("2. Crystal Palace F.C. ")
        this.option2.position(150,120);
        this.option3.html("3. Aston Villa")
        this.option3.position(150,140);
        this.option4.html("4. Leeds United")
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(400, 230);
        this.button.position(350, 300);
        

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount=contestantCount+1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

        });


    }
}