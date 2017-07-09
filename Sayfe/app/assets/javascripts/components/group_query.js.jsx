class GroupQuery extends React.Component
{
    constructor(props)
    {
	super(props)
	this.handleSafe = this.handleSafe.bind(this)
	this.handleDanger = this.handleDanger.bind(this)
    }

    handleSafe()
    {
	$.ajax
	({
	    url: this.props.url,
	    type: 'PUT'
	})
    }

    handleDanger()
    {
	$.ajax
	({
	    url: this.props.url,
	    type: 'PUT'
	})
    }
    render()
    {
	return <div>
	    <li className = 'list-group-item'>
		The group { this.props.name } wants to know if you're safe
		<a onClick = { this.handleSafe }>I'm safe </a>
		<a onClick = { this.handleDanger }> I need help</a>
	    </li>
	</div>
    }
}
