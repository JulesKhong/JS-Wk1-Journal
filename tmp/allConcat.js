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
