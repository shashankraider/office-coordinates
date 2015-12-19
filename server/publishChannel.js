Meteor.publish('rooms',function(){
    console.log("Count" +Locations.find().count());
    var location= Locations.find();
    console.log(location.fetch());
    return location;
});