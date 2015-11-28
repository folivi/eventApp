var GeolocBtn = React.createClass({

  render: function() {
    return <button className="btn btn-info" onClick={this.props.onClick}>Geolocate me</button>;
  }
});
