let ctr = 1;

function AddTodo() {
  const element = document.querySelector("input");
  const spanEl = document.createElement("span");
  const buttEl = document.createElement("button");
  const value = element.value;

  if (value.trim() === "") return; 

  spanEl.innerHTML = value;
  buttEl.innerHTML = "Delete";

  const divEl = document.createElement("div");
  divEl.id = ctr;
  divEl.style.display = "flex";             
  divEl.style.justifyContent = "space-between"; 
  divEl.style.alignItems = "center";     
  divEl.style.padding = "12px 15px";
  divEl.style.marginBottom = "12px";
  divEl.style.backgroundColor = "peachpuff";
  divEl.style.borderRadius = "10px";
  divEl.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
  divEl.style.width = "100%";
  divEl.style.boxSizing = "border-box";

  buttEl.onclick = function () {
    divEl.remove();
  };

  divEl.appendChild(spanEl);
  divEl.appendChild(buttEl);

  // APPEND TO THE UL INSIDE CONTAINER (fixed)
  document.querySelector("#todo-list").appendChild(divEl);

  element.value = ""; // clear input
  ctr++;
}
