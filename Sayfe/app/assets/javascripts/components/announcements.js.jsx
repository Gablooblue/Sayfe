class Announcements extends React.Component
{

  render() {
      
      var createItem = (announcement) => <Announcement announcement = {announcement}  />
    return <div>{this.props.announcements.map(createItem)}</div>;
  }
}

