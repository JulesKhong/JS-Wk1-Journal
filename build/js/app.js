(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry =  require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var blogEntry = new Entry(title, body);
    var numberOf = $('#number-of').val();
    var result;
    if (numberOf === "words") {
      result = blogEntry.words();
    } else if (numberOf === "vowels") {
      result = blogEntry.vowels();
    } else if (numberOf === "consonants") {
      result = blogEntry.consonants();
    } else {
      result = 0;
    }
      $('#result').append("<p>" + result + "</p>");
  });
});

},{"./../js/entry.js":1}]},{},[2]);
