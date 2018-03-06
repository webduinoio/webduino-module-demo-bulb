Blockly.JavaScript['bulb_class'] = function (block) {
  var id = block.id.replace(/[^a-zA-Z0-9]/g, '');
  var code = 'new demoBulb(\'' + id + '\')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}


Blockly.JavaScript['bulb_click'] = function (block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bulbVariable_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var callback = 'async function (e) {\n' + statements_do_ + '}';
  var code = variable_name + '.on(\'click\', ' + callback + ');\n';
  return code;
};

Blockly.JavaScript['bulb_toggle'] = function (block) {
  var variable_bulbvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bulbVariable_'), Blockly.Variables.NAME_TYPE);
  var code = variable_bulbvariable_ + '.toggleStatus();\n';
  return code;
};

Blockly.JavaScript['bulb_set'] = function (block) {
  var variable_bulbvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bulbVariable_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_');
  var code = variable_bulbvariable_ + '.setStatus(' + dropdown_status_ + ');\n';
  return code;
};

Blockly.JavaScript['bulb_status'] = function (block) {
  var variable_bulbvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bulbVariable_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_') === 'true';
  var code = variable_bulbvariable_ + '.status === ' + dropdown_status_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};