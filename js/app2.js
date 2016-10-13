$(document).ready(function(){
  $('input[name=create]').click(function() {
    var data = {
      operators: {
        operator1: {
          top: 20,
          left: 20,
          properties: {
            title: label,
            inputs: {},
            outputs: {
              output_1: {
                label: property,
              }
            }
          }
        },
        operator2: {
          top: 80,
          left: 300,
          properties: {
            title: label2,
            inputs: {
              input_1: {
                label: property,
              },
              input_2: {
                label: property2,
              },
              input_3: {
                label: 'test',
              },
            },
            outputs: {}
          }
        },
      },
      links: {
        link_1: {
          fromOperator: 'operator1',
          fromConnector: 'output_1',
          toOperator: 'operator2',
          toConnector: 'input_2',
        },
      }
    };

    // Apply the plugin on a standard, empty div...
    var $flowchart = $('#row');
    $flowchart.flowchart({
      data: data
    });

    var operatorI = 0;
    $flowchart.siblings('.create_operator').click(function() {
      var operatorId = 'created_operator_' + operatorI;
      var operatorData = {
        top: 60,
        left: 500,
        properties: {
          title: 'Operator ' + (operatorI + 3),
          inputs: {
            input_1: {
              label: 'Input 1',
            }
          },
          outputs: {
            output_1: {
              label: 'Output 1',
            }
          }
        }
      };

      operatorI++;
      console.log(data);

      $flowchart.flowchart('createOperator', operatorId, operatorData);
    });

    $flowchart.siblings('.delete_selected_button').click(function() {
      $flowchart.flowchart('deleteSelected');
    });
  });
});


var UserSelection = {language: "1", framework: "1", orm: "1", db: "1", tableName1: "user", tableName2: "photo", tableName3: "tag", columnName: "name", columnName2: "image"};
var label = UserSelection.tableName1;
var label2 = UserSelection.tableName2;
var label3 = UserSelection.tableName3;
var property = UserSelection.columnName;
var property2 = UserSelection.columnName2;
