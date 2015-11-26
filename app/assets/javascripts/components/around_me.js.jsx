
var AroundMe = React.createClass({
    getInitialState: function(){
        return({
            dances: [],
            events: this.props.events,
            user_coords: {},
        })
    },
    componentDidMount: function(){

        $.get('/dances.json', function(response){
            this.setState(
                {
                    dances: response.dances
                }
            );
        }.bind(this));

    },
    update_events: function(data){
        this.setState({events: data});
    },

    filter_by_geolocation: function(){
        var vm = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                vm.setState({user_coords: {longitude: position.coords.longitude, latitude: position.coords.latitude}}, function() {
                    $.ajax({
                        url: "/aroundme.json",
                        datatype: 'JSON',
                        data: vm.state.user_coords,
                        method: 'GET'
                    }).done(function(response){
                        console.debug(response);
                        vm.update_events(response.aroundme);
                    }.bind(vm));
                });
            });
        } else {
            console.log("geo not supported")
        }
    },

    render: function() {
        return(
            <div>
                <div className='col-md-offset-5'>
                    <GeolocBtn onClick={this.filter_by_geolocation()} />
                </div>
                <EventsList events={this.state.events} />
            </div>
        );
    }
});

