if (Meteor.isClient) {

Template.commentsIn.events({
  'submit .new-comment'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    //right now the 'text' is being inserted into SinghComments collection.
    SinghComments.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    //and the form is clearing everytime
    target.text.value = '';
  },
});

  //now time to work on the helper/handlebar stuff

var SinghCommentDictionary =  {
  SinghCommentDictionary: function(){
    return {text: "comment", createdAt:"date"};
  }
};

//i think i need to assign the singhcommentdictionary something---just not sure how, because it the function in the expression helper is just returning the string of text, instead of thecomments. what are the "comments"? they are "text", text is my key, i need to get the value of the key---how do I do that?
Template.commentsOut.helpers(SinghCommentDictionary);


//what's the difference between all of these dictionaries??? one is a variable, given a name (line 27), the samplecommentdictionary: is the name of the function which asks to return the text value--currently specified to be a string, and when the text value was created, currently specified as a string 'date.'
  //so what's the commentoutputhelperdictionary?????
  //so the variable is the function,

/*
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

*/
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
}