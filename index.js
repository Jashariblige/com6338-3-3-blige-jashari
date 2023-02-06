var questionsArr = [
    {
        question: 'UF has 10 NCAA Sports Teams.',
        answer: false
    } ,

    {
        question: 'UF has a Mens and Womens Swim and Dive Team.',
        answer: true 
    } ,

    {
        question: 'The last national title won by UF Football was in 2010.',
        answer: false
    } ,

    {
        question: 'The only UF Team without a national title is Womens Basketball.',
        answer: true
    } ,

    {
        question: 'UF has a NCAA mens Soccer and Lacrosse Team.',
        answer: false
    } ,

    {
        question: 'UF Mens and Womens Track each won national titles in 2022.',
        answer: true
    } ,

    {
        question: 'The last UF Mens tenis national title was won in 2020.',
        answer: false
    }
]

function runQuiz() {
    var answersArr = [7];
    for(let i = 0; i < questionsArr.length; i++) {
        answersArr[i] = confirm(questionsArr[i].question);
    }

    var counter = 0;
    
    for (let i = 0; i < questionsArr.length; i++) {
        if (answersArr[i] === questionsArr[i].answer) {
            counter++
        }
    }
    
    let message = 'Your score is ' + Math.round((counter / questionsArr.length) * 100) + '%';
    alert(message);
}