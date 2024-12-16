let records = JSON.parse(
  window.localStorage.getItem("records") ?? JSON.stringify([])
);

const ROOT = document.getElementById("table-root");

const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");

const head = Object.keys(records[0]);
const tr = document.createElement("tr");
head.forEach(function (element) {
  const th = document.createElement("th");
  const textNode = document.createTextNode(element);
  th.appendChild(textNode);
  tr.appendChild(th);
});
const thActions = document.createElement("th");
const actionsTextNode = document.createTextNode("Actions");
thActions.appendChild(actionsTextNode);
tr.appendChild(thActions);

records.forEach(function (element) {
  const tr = document.createElement("tr");
  Object.values(element).forEach(function name(text) {
    const td = document.createElement("td");
    const textNode = document.createTextNode(text);
    td.appendChild(textNode);
    tr.appendChild(td);
  });

  const button = document.createElement("button");
  button.setAttribute("class", "delete-button");
  const buttonText = document.createTextNode("Delete");
  button.appendChild(buttonText);

  button.addEventListener("click", function () {
    tBody.removeChild(tr);
    const filteredElements = records.filter(function (child) {
      return child.name !== element.name;
    });
    window.localStorage.setItem("records", JSON.stringify(filteredElements));
    records = filteredElements;
    // window.location.reload();
  });

  tr.appendChild(button);
  tBody.appendChild(tr);
});

table.appendChild(tHead);
tHead.appendChild(tr);
table.appendChild(tBody);
ROOT.appendChild(table);
