const buttons = document.querySelectorAll(".buttons button");

const tables = document.querySelectorAll(".tables table");

const selectList = (element, index = 0) => {
  tables.forEach((table) => table.classList.remove("active"));
  tables[index].classList.add("active");

  if (element) {
    buttons.forEach((button) => button.classList.remove("active"));
    element.classList.add("active");
  }
};

selectList();
