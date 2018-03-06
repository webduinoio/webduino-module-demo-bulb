+(function (window, $) {

  'use strict';

  var demoBulb = function (id) {
    if (!id) {
      throw new Error('Missing parameter.');
    }
    if (typeof id !== 'string') {
      throw new Error('Invalid type of parameter.');
    }

    this.blockId = '#' + id;
    this._bulbStatus = false;

    if ($(this.blockId).length < 1) {
      var $bulb = $('<img/>').attr('src', 'https://blocklypro.webduino.io/media/off.jpg').data('status', this._bulbStatus);
      var $wrapper = $('<div/>').addClass('demo').attr('id', id);

      $('#demo-container').append($wrapper);
      $wrapper.append($bulb);
      this.$bulb = $bulb;
    }
  };

  demoBulb.prototype = {
    get status() {
      return this._bulbStatus;
    }
  }

  demoBulb.prototype.setStatus = function (status) {
    var imgPath = 'https://blocklypro.webduino.io/media/';

    if (status) {
      imgPath += 'on.jpg';
    } else {
      imgPath += 'off.jpg';
    }
    this._bulbStatus = status;
    this.$bulb.attr('src', imgPath).data('status', this._bulbStatus);
    return this;
  };

  demoBulb.prototype.toggleStatus = function () {
    this._bulbStatus = !this._bulbStatus;
    this.setStatus(this._bulbStatus);
    return this;
  };

  demoBulb.prototype.on = function (listener, callback) {
    this.$bulb.off(listener).on(listener, callback);
    return this;
  };

  window.demoBulb = demoBulb;

}(window, window.jQuery));