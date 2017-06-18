module ApplicationHelper
    def friendly_date(d)
	d.strftime("%b %d %Y")
    end

    def friendly_time(d)
	d.strftime("%H:%M:%S")
    end

    def friendly_created_date(d)
	friendly_date d.created_at
    end

    def friendly_created_time(d)
	friendly_time d.created_at
    end

    def friendly_updated_date(d)
	friendly_date d.updated_at
    end

    def friendly_updated_time(d)
	friendly_time d.updated_at
    end
end
