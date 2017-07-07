class User extends React.Component
{
    render()
    {
    var user = this.props.user;
	return <div><a  href= {user.url} className = "list-group-item" >{user.first_name} {user.last_name}</a></div>
    }
}
