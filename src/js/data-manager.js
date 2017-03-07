function listPlayers(path, filterstring) {
    return new Promise(function(resolve, reject) {
        d3.csv(path, function(data) {
          if (filterstring  !== "Batters" && filterstring  !== "Pitchers"){
            var a = _.filter(data, {
                Pos: filterstring
            })

            resolve(selectRows(a))

          }else{
            resolve(selectRows(data));
          }
        })
    }).catch(function(err) {
        console.log(err);
    });;
}

function displayTableData(dataObject, s) {
    return new Promise(function(resolve, reject) {
        var colhs = Object.keys(dataObject[0]);

        var hotElement = document.querySelector(s);
        var hotElementContainer = hotElement.parentNode;
        var hotSettings = {
            data: dataObject,
            stretchH: 'all',
            autoWrapRow: true,
            height: 150,
            width: 500,
            rowHeaders: true,
            colHeaders: colhs,
            dropdownMenu: true,
            filters: true
        };

        var hot = new Handsontable(hotElement, hotSettings);
        resolve(hot)
    }).catch(function(err) {
        console.log(err);
    });
}


function fileRouting(str) {
    if (str == "Pitchers") {
        return window.fileDecision = "pitchers.csv"
    } else {
        return window.fileDecision = "batters.csv"
    }
}

function selectRows(data){
  return new Promise(function(resolve, reject){
    var o = ['Team', 'Pos']
    var a = _.map(data, function(tem){ return _.omitBy(tem, function(v,key){ return o.includes(key) }) })
    resolve(a)
  })
}
