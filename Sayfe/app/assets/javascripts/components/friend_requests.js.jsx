class FriendRequests extends React.Component
{
    render()
    {
	var createItem = (friend_request) => <FriendRequest friend_request = {friend_request} />;

	return <div>
	    {this.props.friend_requests.map(createItem)}
	</div>
    }
}
