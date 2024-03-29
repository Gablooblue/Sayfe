class AnnouncementContainer extends React.Component 
{
    constructor(props)
    {
	super(props)
	this.state =
	{
	    loading: true,
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
	    (data) => this.setState({announcements: data, loading: false})
	);
    }
    
    clearAnnouncements()
    {
	this.announcements.forEach(clearAnnouncement);
    }


    render() {
	const { loading } = this.state;
	if(loading)
	    return <Loading/>
	else
	{   
	    if(!this.state.announcements.length)
		return <div><h5 className="text-center">No announcements</h5></div>
	    return <Announcements announcements={this.state.announcements} />;
	}
    }

    componentWillUnmount()
    {
	clearInterval(this.interval);
    }
}

