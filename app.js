var questionArray = [
    {
        Question: "Q1: Which of the following data structure is linear type?",
        answer: "D. All of the above",
        option: [
            "A. Strings",
            "B. Queue",
            "C. Lists",
            "D. All of the above",

        ]
    },


    {
        Question: "Q2:Who is father of C Language?",
        answer: "B. Dennis Ritchie",
        option: [
            "A. Bjarne Stroustrup",
            "B. Dennis Ritchie",
            "C. James A. Gosling",
            "D. Dr. E.F. Codd",



        ]

    },
    {
        Question: "Q3:An array elements are always stored in _________ memory locations.",
        answer: "A. Sequential",
        option: [
            "A. Sequential",
            "B. Random",
            "C. Sequential and Random",
            "D. None of the above",


        ]

    },
    {
        Question: "Q4:Queue is a _____________ list.",
        answer: "D.FIFO",
        option: [
            " A.LIFO",
            " B.LILO",
            "C.FILO",
            "D.FIFO",



        ]

    },
    {
        Question: "Q5: In which linked list last node address is null?",
        answer: "C. Singly linked list",
    option: [
        " A. Doubly linked list",
        "B. Circular list",
        "C. Singly linked list",
        "D. None of the above",


    ]

    },
];

function showQuestion(e) {

    var questionElement = document.getElementById("questions");

    questionElement.innerHTML = questionArray[e].Question;

    var optionElement = document.getElementsByClassName("optionElement");

    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionArray[e].option[i]


    }
}
var questionCount = 0;
var score = 0;
var lastquestion = 4;
function nextQuestion() {





    var nextbtn = document.getElementById("nextbtn");
    var finish = document.getElementById("finish");
    validate(questionCount)
    if (questionCount == lastquestion) {
        var btn = document.createElement("button");
        var Text = document.createTextNode("Finish")
        btn.setAttribute("class", "Finish_btn")
        btn.setAttribute("onclick", "total(this)")

        btn.appendChild(Text)
        finish.appendChild(btn)


    }
    questionCount++;



    showQuestion(questionCount)
    removeactiveClass()




}
function putactiveClass(e) {

    removeactiveClass()
    e.classList.add("active1")



}
function removeactiveClass(e) {

    var active = document.getElementsByClassName("active1");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active1");
    }
}

var totalscore = 50;
function validate(e) {

    var active = document.getElementsByClassName("active1");



    if (active[0].innerHTML == questionArray[e].answer) {
        score = score + 10;
        alert("Right Answer");
    }
    else {


        alert("Wrong Answer")


    }









}
function total(e) {
    alert("YOUR  MARKS IS: " + score + " Out Of: " + totalscore)



}














