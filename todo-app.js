let input = document.getElementById("input");

let para = document.getElementById("para");

document.getElementById("btn").addEventListener("click", () => {
  if (input.value === "") {
    alert("Write Something");
  }

  else {

    let section = document.createElement("li");
    section.innerHTML = input.value;
    document.getElementById("div").appendChild(section);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    section.appendChild(span);
    span.addEventListener('click',()=>{
        section.classList.toggle('remove')
        input.value=''
    })

    section.addEventListener('click',()=>{
        section.classList.toggle('checked')
    })
  }

});