 Meteor.startup(function () {
        //Bootstraping Sample Coordinates data
        if (Locations.find().count() === 0) {
            // Creating sample coordinate data
            var sampleLocations = [
                {
                    name: 'Krishna',
                    capacity: 20,
                    projector: true,
                    floor: 4,
                    tower: 'A',
                    coordinates: [
                        {x: 390, y: 360}
                    ]
                },
                {
                    name: 'Shimsha',
                    capacity: 5,
                    projector: false,
                    floor: 4,
                    tower: 'A',
                    coordinates: [
                        {x: 1238, y: 470}
                    ]
                }
            ];
            //var locationMap = [
            //    {
            //        floor: 4,
            //        tower: 'A',
            //        map: 'map4A'
            //
            //    }
            //]

            _.each(sampleLocations, function (location) {
                Locations.insert(location);
            });


        }
    });