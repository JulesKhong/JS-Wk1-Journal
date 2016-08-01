function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.words = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowels = function() {
  var letters = this.body.split([','[String.length]]);
  var vowels = [];
  var consonants = [];
  for (i = 0; i < letters.length; i++) {
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
      vowels.push(letters[i]);
    } else {
      consonants.push(letters[i]);
    }
  }
  return vowels.length;
};

Entry.prototype.consonants = function() {
  var letters = this.body.split([','[String.length]]);
  var vowels = [];
  var consonants = [];
  for (i = 0; i < letters.length; i++) {
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
      vowels.push(letters[i]);
    } else if (letters[i] != " ") {
      consonants.push(letters[i]);
    }
  }
  return consonants.length;
};

exports.entryModule = Entry;
