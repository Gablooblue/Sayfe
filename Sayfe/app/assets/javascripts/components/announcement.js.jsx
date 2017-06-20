class Announcement extends React.Component
{

  render() {
    var title = this.props.announcement.title;
    var body = this.props.announcement.announcement;
    var user = this.props.announcement.user;


    return <div>
	<h3><a href= {this.props.announcement.url}>{title}</a></h3>
	<p> {user.first_name} {user.last_name}</p>
	<p> {body}</p>
	<hr/>
    </div>;
  }

}

