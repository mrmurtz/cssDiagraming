function Operator(top, left, title){
  this.framework = {
          top: 0,
          left: 0,
          properties: {
            title: '',
            inputs: {},
            outputs: {
            }
          }
        };
      }

var UserSelection = {language: "1", framework: "1", orm: "1", db: "1", tableName1: "photo", tableName2: "user", tableName3: "tag", columnName1: "name", columnName2: "image", columnName3: "id"};

// for each table create a new Operator framework and title it with tableName1
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
                		}
                	}
                };
var count = Object.keys(UseThis.table).length;
var colCount = Object.keys(UseThis.table["1"].columns).length;

function OperatorCreator(UserSelection){
  var tableLength = 3;
  for (var i = 1; i < tableLength+1; i++) {
    var currentTable = UserSelection.table.i;
    var top = currentTable*20;
    var left = currentTable*20;
    var title = currentTable.tableName;
    console.log(top);
    console.log(left);
    console.log(title);
    operator+i = new Operator(top, left, title);
  }
}

function updateOperator(operator){
  var noOfColumns = 3;
  var columnData = operator.framework.properties.outputs;
  var result = {};
  for (var i = 1; i < noOfColumns; i++) {

  }

}




//
//
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
//



// get all the properties and add them in a new framework
//  add this framework to data.operators....



var data = {
  operators: {

  },
  links: {
  }
};



//
// for (var i = 0; i < 4; i++) {
//   // grab table lenght
//   // loop through table
//   // operator new with
//   test.operators["operator"+i] = test;
//   test.this.framework.properties.title = "user";
// }
//
// console.log(test);










$(document).ready(function(){
  $('#row').flowchart({
  data: data
});
});
