function greetUser(username){
let fName = document.getElementById('input').value

    document.getElementById('output').innerText = "hello," + fName;
}
greetUser("Harry")

function greetMe(){
    document.getElementById('message').innerText = "Hello, World!"
 }


 function AddNumbers(){
    let a = document.getElementById('numberss').value;
    let b = document.getElementById('numbersss').value;
    document.getElementById('heading-two').innerText = (a + b);}


     function chan(){
        let inputValue = document.getElementById('change').value;
        document.getElementById('title').innerText = inputValue
     }

   function tgth() {
        const string1 = document.getElementById("string1").value;
        const string2 = document.getElementById("string2").value;
        document.getElementById("combinedText").innerText = string1 + " " + string2;
    }
    
    function colo(){
        document.getElementById("colorBox").style.backgroundColor = "purple";

    }