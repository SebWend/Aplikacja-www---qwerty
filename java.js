function sortTable(n) {
  let table = document.getElementById("myTable");
  let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "desc"; 

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      let valX = parseInt(x.innerHTML);
      let valY = parseInt(y.innerHTML);

      if (dir == "desc") {
        if (valX < valY) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "asc") {
        if (valX > valY) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "desc") {
        dir = "asc";
        switching = true;
      }
    }
  }
}