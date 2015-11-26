function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
};

var EventsList = React.createClass({
    getInitialState: function(){
        return({
            events: []
        })
    },
    filterList: function(event){
        document.cookie = "search_text=" + event.target.value.toLowerCase();
        var updatedList = this.state.initialeEvents;
        updatedList = updatedList.filter(function(item){
            //
            if(!item.description) item.description = "";
            return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1 || item.description.toLowerCase().search( event.target.value.toLowerCase()) !== -1 ;
        });
        this.setState({
            events: updatedList
        });
    },
    componentDidMount: function(){
        this.setState(
            {
                events: this.props.events,
                initialeEvents: this.props.events

            }
        )
    },
    render: function() {
        console.log("called render eventlist with" + this.state.events.length)
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 col-md-offset-3'>
                        <input type="text" className='form-control' placeholder='filter by event name, dance type or artist name' onChange={this.filterList} />
                    </div>
                </div>
                <hr className="spacer-30" />
                <div className='row'>
                    <div className='container'>
            {
                this.state.events.map(function(event){
                    return(
                        <div className="col-lg-6" key={event.id}>
                            <div className="thumbnail style2 team-member event-thumbnail">
                                <div className="caption">
                                    <a href= {'/events/' + event.slug}><b>{event.name}</b></a>
                                    <div className="post-meta">
                                        <span className="post-category"></span><span className="post-date">{new Date(event.start_time).toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <span>{event.city}, {event.country_code}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                    </div>
                </div>
            </div>
        );
    }
});
