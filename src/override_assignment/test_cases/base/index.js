function Base() {
    this.text = '';
  }
  
  Base.prototype.callRealisticRun = function () {
    var baseNotConflictSample = new Base();
    baseNotConflictSample.cleanText();
  };
  
  Base.prototype.cleanText = function () {
    this.normalizeWhitespaces(); // RIGHT
    this.removeComments();
    this.removeDuplicatedWords(); // LEFT
  };
  
  Base.prototype.removeDuplicatedWords = function () {
    this.text = this.text + 'removeDuplicatedWords';
  };
  
  Base.prototype.removeComments = function () {
    this.text = this.text + 'removeComments';
  };
  
  Base.prototype.normalizeWhitespaces = function () {
    this.text = this.text + 'normalizeWhitespaces';
  };
  
  // Example usage:
  var sample = new Base();
  sample.callRealisticRun();
  