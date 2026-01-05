const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const quanty = document.querySelector("#quanty");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const checkbox = document.querySelector("#checkbox")
const contentForm = document.querySelector(".content_formTeste")
const contentResult = document.querySelector(".content_result")
const contentNumber = document.querySelector(".content_number")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const quantyNumber = Number(quanty.value);

  if (quantyNumber <= 0 || num2.value <= 0) {
    console.log("teste");
  }

  let quantyArr = [];

  function ramdowNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  while (quantyArr.length <= quantyNumber - 1) {
    const sorterdNumber = ramdowNumber(number1, number2)
    if (checkbox.checked) {
      if (!quantyArr.includes(sorterdNumber)) {
        quantyArr.push(sorterdNumber)
      }

    } else {
            quantyArr.push(sorterdNumber)
    }
  }
  console.log(quantyArr)

  contentResult.classList.remove("disable")
  contentForm.classList.add("disable")

  function createResult(tag, atributtes = {}) {
    const element = document.createElement(tag)

    Object.entries(atributtes).forEach(([key, value]) => element.setAttribute(key,value))

    return element
  }

  quantyArr.forEach((number) =>{
    const result = createResult("h1",{class: "number_result"})

    result.innerText = number
    contentNumber.appendChild(result)
    
  })
   
   

  
  
});
