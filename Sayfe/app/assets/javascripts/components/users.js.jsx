class Users extends React.Component
{
    render() 
    {
	var createItem =  (user) =>  <User user={user}  />
	return <div>{this.props.users.map(createItem)}</div>;
    }
}

