function striptags(str) {
  let clean = str.replace(/(<([^>]+)>)/gi, "").trim();
  return clean;
}

function tableJSON(tableid) {
  let tbl = document.getElementById(tableid);
  let keys = [],
    res = [];
  for (var i = 0; i < tbl.rows.length; i++) {
    if (i == 0) {
      // table head
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
        keys.push(
          striptags(
            tbl.rows[i].cells[j].innerHTML.replace(/[^A-Za-z0-9!?]/g, "")
          )
        );
      }
    } else {
      var obj = {};
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
        obj[keys[j]] = striptags(tbl.rows[i].cells[j].innerHTML);
      }
      res.push(obj);
    }
  }
  return res;
}
