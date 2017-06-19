class Announcement extends React.Component
{

  render() {
    var title = this.props.announcement.title;
    var body = this.props.announcement.body;
    var user = this.props.announcement.user;

    return <div>
	<h3>{title}</h3>
	<p> {user.first_name} {user.last_name}</p>
	<p> {body}</p>
	<hr/>
    </div>;
  }

}

