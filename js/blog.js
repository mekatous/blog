$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("aVz9JezeAKLxFHiTAHcXnc7LLYs9UcNtx67qfUSO", "99mwS6MqdpEZItX5OA8UKROCC4huX9DNaRfBZPqk"); 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});