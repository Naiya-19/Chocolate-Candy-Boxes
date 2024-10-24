
let showAns = true;

const toggleAnswers = () => {
  console.log("toggle");
  showAns = !showAns;
  if (showAns) $("p.content").show();
  else $("p.content").hide();
};

const highlightRandomChocolate = () => {
  
  $(".wrapper .box").css("background-color", "");
  let randomIndex = Math.floor(Math.random() * 10);
  console.log(randomIndex);
  $(".wrapper .box:eq(" + randomIndex + ")").css("background-color", "yellow");
  let randomCode = Math.floor(Math.random() * 50) + 1;  
  alert("Your number is: " + randomCode);  
};
