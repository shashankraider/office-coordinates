if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

Meteor.subscribe('rooms');
  Template.findForm.helpers({
    findLocation: function() {
      return Locations.find();
    }
  });

  Template.findForm.events({
    'submit form': function(event){
      event.preventDefault();
      var room = event.target.roomname.value;
      Session.set('searchRoomName',room);
      $('#mapModal').modal('show');
    }
  });

  Template.showLocation.created = function(){
    var instance = this;
    instance.loaded = new ReactiveVar(0);
    this.autorun(function(){
      var roomSubscription = instance.subscribe('rooms');
      if(roomSubscription.ready()){
        console.log("Show location Template Loaded");
        instance.loaded.set(1);
      }
    });
    instance.location = function(room){
       return Locations.findOne({name: room});
    }
  };

  Template.showLocation.helpers({
    location: function() {
      var room = Session.get('searchRoomName');
      return Template.instance().location(room);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
