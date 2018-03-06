var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['bulb_class'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BULB);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bulb_click'] = {
  init: function () {
    this.appendStatementInput('do_')
        .setCheck(null)
        .appendField(Blockly.Msg.DEMO_BULB_WHEN)
        .appendField(new Blockly.FieldVariable('bulb'), 'bulbVariable_')
        .appendField(Blockly.Msg.DEMO_BULB_CLICK);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bulb_toggle'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BULB_TOGGLE)
        .appendField(new Blockly.FieldVariable('bulb'), 'bulbVariable_')
        .appendField(Blockly.Msg.DEMO_BULB_STATUS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bulb_set'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BULB_SWITCH)
        .appendField(new Blockly.FieldVariable('bulb'), 'bulbVariable_')
        .appendField(Blockly.Msg.DEMO_BULB_TO)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.DEMO_BULB_ON,'true'],
          [Blockly.Msg.DEMO_BULB_OFF,'false']
        ]), 'status_');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['bulb_status'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BULB_CHECK_IF)
        .appendField(new Blockly.FieldVariable('bulb'), 'bulbVariable_')
        .appendField(Blockly.Msg.DEMO_BULB_IS)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.DEMO_BULB_ON, 'true'],
          [Blockly.Msg.DEMO_BULB_OFF, 'false']
        ]), 'status_');
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
