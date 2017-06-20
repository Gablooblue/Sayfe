class Groups extends React.Component
{
    render()
    {
	var createItem = (group) => <Group group = {group} />
	
	return <div>
	    {this.props.groups.map(createItem)}
	</div>;
    }
}
