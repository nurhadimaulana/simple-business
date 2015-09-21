Router.map(function(){
  this.route('index', {path: '/'});

  this.route('signUp', {
    path: '/users/sign_up',
    onBeforeAction: function(){
      if(Meteor.userId()){
        this.render('index');
      }
      else{
        this.next();
      }
    }
  });

  this.route('signIn', {
    path: '/users/sign_in',
    onBeforeAction: function(){
      if(Meteor.userId()){
        this.render('index')
      }
      else{
        this.next();
      }
    }
  });

  this.route('businessesIndex', {
    path: '/businesses',
    onBeforeAction: function(){
      if(!Meteor.userId()){
        this.render('signIn')
      }
      else{
        this.next();
      }
    }
  });

  this.route('businessesNew', {
    path: '/businesses/new',
    onBeforeAction: function(){
      if(!Meteor.userId()){
        this.render('signIn')
      }
      else{
        this.next();
      }
    }
  });

  this.route('offersIndex', {
    path: '/offers',
    onBeforeAction: function(){
      if(!Meteor.userId()){
        this.render('signIn')
      }
      else{
        this.next();
      }
    }
  });

  this.route('offersNew', {
    path: '/offers/new',
    onBeforeAction: function(){
      if(!Meteor.userId()){
        this.render('signIn')
      }
      else{
        this.next();
      }
    }
  });
});