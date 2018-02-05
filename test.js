for (let i = 0; i < listItems.length; i++) {
  let dbId = listItems[i].getAttribute("data-dbid");
  if (dbId === 1) {
    listItems[i].style.color = "blue";
  }
}
