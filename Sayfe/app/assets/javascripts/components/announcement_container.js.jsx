class AnnouncementContainer extends React.Component 
{
    constructor(props)
    {
	super(props)
	this.state =
	{
	    announcements: []
	}
	this.fetchAnnouncements = this.fetchAnnouncements.bind(this);
    }

    componentWillMount()
    {
	this.fetchAnnouncements();
	this.interval = setInterval( () => this.fetchAnnouncements, 1000);
    }

    fetchAnnouncements()
    {
	$.getJSON(
	    this.props.announcementsPath,
	    (data) => this.setState({announcements: data})
	);
    }
    
    clearAnnouncements()
    {
	this.announcements.forEach(clearAnnouncement);
    }


    render() {
	return <Announcements announcements={this.state.announcements} />;
    }

    componentWillUnmount()
    {
	clearInterval(this.interval);
    }
}

