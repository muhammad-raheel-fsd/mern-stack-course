const records = JSON.parse(
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

records.forEach(function (element) {
  const tr = document.createElement("tr");
  Object.values(element).forEach(function name(text) {
    const td = document.createElement("td");
    const textNode = document.createTextNode(text);
    td.appendChild(textNode);
    tr.appendChild(td);
  });
  tBody.appendChild(tr);
});

table.appendChild(tHead);
tHead.appendChild(tr);
table.appendChild(tBody);
ROOT.appendChild(table);
