Template.signIn.helpers({
  'formTitle': function(){
    return 'Sign In';
  }
});

Template.signIn.events({
  'submit #login-form' : function(event){
    event.preventDefault();
    // retrieve the input field values
    var email = event.target.email.value;
    var password = event.target.password.value;

    // Trim and validate your fields here....

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, function(err){
      if (err){
        console.log(err);
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
      }
      else{
        console.log('success');
        // The user has been logged in.
      }
    });
    return false;
  }
});