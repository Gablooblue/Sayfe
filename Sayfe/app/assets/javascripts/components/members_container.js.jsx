class UsersContainer extends React.Component
{
    constructor(props)
    {
	super(props)
	this.state = 
	{
	    users: []
	}
	this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentWillMount()
    {
	this.fetchUsers();
	this.interval = setInterval (() => this.fetchUsers, 1000);
    }

    fetchUsers()
    {
	$.getJSON
	(
	    this.props.usersPath,
	    (data) => this.setState ({users: data})
	);
    }

    render()
    {
	return <Users users = {this.state.users}/>;
    }
    
    componentWillUnmount()
    {
	clearInterval(this.interval);
    }
}
