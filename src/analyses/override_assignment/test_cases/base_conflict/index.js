function Base() {
    this.text = '';
    this.fixes = 0;
    this.comments = 0;
  }
  
  Base.prototype.callRealisticRun = function () {
    var baseConflictSample = new Base();
    baseConflictSample.countFixes();
  };
  
  Base.prototype.countFixes = function () {
    this.countDupWhitespace(); // RIGHT
    this.countComments();
    this.countDupWords(); // LEFT
    return this.fixes;
  };
  
  Base.prototype.countDupWords = function () {
    this.fixes = this.fixes + 2;
  };
  
  Base.prototype.countComments = function () {
    this.comments = this.comments + 1;
  };
  
  Base.prototype.countDupWhitespace = function () {
    this.fixes = this.fixes + 1;
  };
  
  // Example usage:
  var sample = new Base();
  sample.callRealisticRun();
  