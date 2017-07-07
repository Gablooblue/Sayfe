class FriendRequest extends React.Component
{
    constructor(props)
    {
	super(props)
	this.handleAccept = this.handleAccept.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
    }
    handleAccept()
    {
	$.ajax
	(
	{
	    url: this.props.friend_request.url,
	    type: 'PUT'
	}
	);
    }

    handleDelete()
    {
	$.ajax
	(
	{
	    url: this.props.friend_request.url,
	    type: 'DELETE'
	}
	);
    }
    render()
    {
	var request = this.props.friend_request;
	var user = request.user;
	return <div>
		<li>
		    <a href = {user.url}>
			{user.first_name}
		    </a> wants to add you as a friend <br />
		    <a onClick = {this.handleAccept}>Accept </a>
		    
		    <a onClick = {this.handleDelete}>Delete</a>
		</li>
	    </div>

    }
}
