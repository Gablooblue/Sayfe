class User extends React.Component
{
    render()
    {
	return <div><li className = "list-group-item">{this.props.user.first_name} {this.props.user.last_name}</li></div>
    }
}
