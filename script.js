const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const ul = document.querySelector("#todo-list");
ul.addEventListener("click", function(event) {
  if (event.target.className === "done") {
    event.target.className = "";
  } else {
    event.target.className = "done";
  }
});

function removeItem(event) {
  const parent = event.target.parentElement;
  parent.remove();
}

const button = document.querySelector("#add-to-do");
button.addEventListener("click", function(event) {
  const input = document.querySelector("input[type = 'text']");
  let newItem = document.createElement("div");
  newItem.innerHTML = `<li>${
    input.value
  }</li><button class='delete'> Delete</button >`;
  ul.appendChild(newItem);
  newItem.querySelector("button").addEventListener("click", removeItem);
});

const delbuttons = document.querySelectorAll(".delete");
delbuttons.forEach(function(elem) {
  elem.addEventListener("click", removeItem);
});
