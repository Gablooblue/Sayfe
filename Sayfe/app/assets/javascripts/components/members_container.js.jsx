class MembersContainer extends React.Component
{
    constructor(props)
    {
	super(props)
	this.state = 
	{
	    members: []
	}
	this.fetchMembers = this.fetchMembers.bind(this);
    }

    componentWillMount()
    {
	this.fetchMembers();
	this.interval = setInterval (() => this.fetchMembers, 1000);
    }

    fetchMembers()
    {
	$.getJSON
	(
	    this.props.membersPath,
	    (data) => this.setState ({members: data})
	);
    }

    render()
    {
	return <Users users = {this.state.members}/>
    }
    
    componentWillUnmount
    {
	clearInterval(this.interval);
    }
}
