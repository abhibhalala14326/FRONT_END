let input = document.querySelector(".list-add");

function listshow() {
  if (input.value === "") {
    alert("Add a list");
  } else {
    list = input.value.toUpperCase();
    let ListADD = document.createElement("li");
    let listItems = document.querySelector(".list-in-Show");

    listItems.appendChild(ListADD);

    ListADD.innerHTML = ` ${list} <i class="fa-solid fa-trash"></i>`;
    input.value = ""; 

    //! Delete List

    let deleteList = ListADD.querySelector("i");

    function DeleteList() {
      ListADD.remove();
    }

    deleteList.addEventListener("click", DeleteList);
  }
}
