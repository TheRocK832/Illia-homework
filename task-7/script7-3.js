function getNumber() {
    let input; 
  
    for (let attempts = 0; attempts < 10; attempts++) {
      input = prompt("Введіть число більше 100");
  
      if (input > 100) {
        console.log("Останнє введене число:", input);
        return; 
      } else {
        alert("Число повинно бути більше 100.");
      }
    }
  
    console.log("Досягнуто максимальної кількості спроб.");
  }
getNumber ()  