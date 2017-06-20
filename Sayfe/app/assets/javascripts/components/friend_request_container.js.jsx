class FriendRequestsContainer extends React.Component
{
    constructor(props)
    {
	super(props)	
	this.state =
	{
	    requests: []
	}
	this.fetchRequests = this.fetchRequests.bind(this);
    }

    componentWillMount()
    {
	this.fetchRequests();
	this.interval = setInterval ( () => this.fetchRequests, 1000 )
    }

    fetchRequests()
    {
	$.getJSON(
	    this.props.requestsPath,
	    (data) => this.setState({requests: data})
	);
    }

    render()
    {
	console.log(this.state.requests);
	return <FriendRequests friend_requests= {this.state.requests} />;
    }

    componentWillUnmount()
    {
	clearInterval(this.interval);
    }
}
