Template.signUp.helpers({
  'formTitle': function(){
    return 'Sign Up';
  }
});

Template.signUp.events({
  'submit #register-form': function(event){
    event.preventDefault();
    var username = event.target.username.value;
    var email = event.target.email.value;
    var password = event.target.password.value;

    // Trim and validate the input

    // Call createUser function from Accounts
    Accounts.createUser({username: username, email: email, password: password}, function(err){
      if(err){
        console.log(err);
        // Inform the user that account creation failed
      }
      else{
        console.log('success')
        // Success. Account has been created and the user has logged in succesfully
      }
    });

    return false;
  }
});