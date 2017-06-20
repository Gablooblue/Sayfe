json.partial! 'groups/group', group: @group
json.members @members, partial: 'groups/members', as: :member
json.announcements @announcements, partial: 'announcements/announcement', as: :announcement
