var UseThis = {
                	"language": "1",
                	"framework": "1",
                	"orm": "1",
                	"db": "1",
                	"table": {
                		"1": {
                			"tableName": "photo",
                			"columns": {
                				"1": {
                					"name": "first col name",
                					"type": "string"
                				},
                				"2": {
                					"name": "second col name",
                					"type": "string"
                				}
                			}
                		},
                    "2": {
                      "tableName": "tag",
                      "columns": {
                        "1": {
                          "name": "first col name",
                          "type": "string"
                        },
                        "2": {
                          "name": "second col name",
                          "type": "string"
                        }
                      }
                    }
                	}
                };

  // COLUMN FUNCTIONS
  function columnCreator(json){
    var noOfColumns = 3;
    var outputs = [];
    for (var i = 1; i < noOfColumns; i++) {
      var columnData = json.table[i].columns[i];
      outputs.push(columnData);
    }
    return outputs;
  }


  function OperatorCreator(json){
    var tableLength = 2;
    var all = [];
    var columnsArray = columnCreator(json);
    var column1 = columnsArray[0];
    var column2 = columnsArray[1];
    for (var i = 1; i < tableLength+1; i++) {
      var currentTable = json.table[i];
      var top = 20;
      var left = i*200;
      var title = currentTable.tableName;
      var output = new Operator(top, left, title);
      output.operator.properties.outputs = columnsArray[i - 1];
      all.push(output);
    }
    return all;
  }

// DATA SHELL

function Operator(top, left, title){
  this.operator = {
          top: top,
          left: left,
          properties: {
            title: title,
            inputs: {},
            outputs: {
            }
          }
        };
      }

// TABLE FUNCTIONS


function convertToData(array) {
  var data = {
    operators: {
    },
    links: {
    }
  };
  data.operators["operator1"] = array[0].operator;
  data.operators["operator2"] = array[1].operator;
  return data;
}


$(document).ready(function() {
  var array = OperatorCreator(UseThis);
  var newData = convertToData(array);
  console.log(newData);
    $('#row').flowchart({
      data: newData
    });
  });



// BELOW ARE DIFFERENT WAYS OF MAKING THE AMOUNT OF MODELS CUSTOMIZABLE

  // var count = Object.keys(UseThis.table).length;
  // var colCount = Object.keys(UseThis.table["1"].columns).length;



// var tableNames = [];
// tableNames.push(UserSelection.tableName1);
//  if (UserSelection.tableName2 !== null) {
//    tableNames.push(UserSelection.tableName2);
//  }
//  if (UserSelection.tableName3 !== null) {
//    tableNames.push(UserSelection.tableName3);
//  }
//  if (UserSelection.tableName4 !== null) {
//    tableNames.push(UserSelection.tableName4);
//  }
//
// var arrayLength = tableNames.filter( String );
// var length = arrayLength.length;
//
