class Group extends React.Component
{
    render()
    {
	var group = this.props.group
	return <div>
	<a href = {group.url} className = "list-group-item">{group.name}</a>
	</div>
    }
}
