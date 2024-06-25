function randomDelayPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; 
      console.log(`Сгенерированное число: ${randomNumber}`);
      
      setTimeout(() => {
        if (randomNumber >= 1 && randomNumber <= 5) {
          resolve(`Успешно выполнено с числом ${randomNumber}`);
        } else {
          reject(`Ошибка с числом ${randomNumber}`);
        }
      }, randomNumber * 1000); 
    });
  }
  
  randomDelayPromise()
    .then((message) => {
      console.log(message);
    })