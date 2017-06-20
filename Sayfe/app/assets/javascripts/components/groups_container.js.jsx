class GroupsContainer extends React.Component
{
    constructor(props)
    {
	super(props)
	this.state =
	{
	    groups: []
	}
	this.fetchGroups = this.fetchGroups.bind(this);
    }

    componentWillMount()
    {
	this.fetchGroups();
	this.interval = setInterval (() => this.fetchGroups, 1000);
    }

    fetchGroups()
    {
	$.getJSON
	(
	    this.props.groupsPath,
	    (data) => this.setState({groups: data})
	);
    }

    render()
    {
	return <Groups groups={this.state.groups}/>;
    }

    componentWillUnmount()
    {
	clearInterval(this.interval);
    }

}
