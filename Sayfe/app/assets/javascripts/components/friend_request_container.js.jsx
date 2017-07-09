class FriendRequestsContainer extends React.Component
{
    constructor(props)
    {
	super(props)	
	this.state =
	{
	    requests: [],
	    loading: true
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
	    (data) => this.setState({requests: data, loading: false})
	);
    }

    render()
    {
	const { loading } = this.state;
	if(loading)
	{
	    return <Loading/>
	}
	else
	{
	    if(!this.state.requests.length)
		return <div><p className = "text-center">No pending friend requests </p></div>
	    else
		return <FriendRequests friend_requests= {this.state.requests} />;
	}
    }

    componentWillUnmount()
    {
	clearInterval(this.interval);
    }
}
