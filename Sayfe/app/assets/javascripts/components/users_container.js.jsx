class UsersContainer extends React.Component
{
    constructor(props)
    {
	super(props)
	this.state = 
	{
	    users: [],
	    loading: true
	}
	this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentWillMount()
    {
	this.fetchUsers();
	this.interval = setInterval (() => this.fetchUsers, 10000);
    }

    fetchUsers()
    {
	$.getJSON
	(
	    this.props.usersPath,
	    (data) => this.setState ({users: data, loading: false})
	);
    }

    render()
    {
	const {loading} = this.state;
	if(loading)
	    return <Loading/>;
	else
	    return <Users users = {this.state.users}/>;
    }
    
    componentWillUnmount()
    {
	clearInterval(this.interval);
    }
}
