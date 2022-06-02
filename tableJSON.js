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

function tableStrJSON(table){
    let keys = [],res = [];
    var tr = table.match(/<tr[^>]*>([\s\S]*?)<\/tr>/g);
    for(t in tr){
        tr[t] = tr[t].replace(/<tr[^>]*>/g,"").replace(/<\/tr>/g,"").trim();
        var td = tr[t].match(/<th[^>]*>([\s\S]*?)<\/th>/g);
        if(td==null){
            td = tr[t].match(/<td[^>]*>([\s\S]*?)<\/td>/g);
        }
        if(t==0){
            for(d in td){
                keys.push(striptags(td[d]).replace(/[^A-Za-z0-9!?]/g, ""));
            }
        }else{
            var obj = {};
            for(d in td){
                obj[keys[d]] = striptags(td[d]);
            }
            res.push(obj);
        }
    }
    return res;
}
