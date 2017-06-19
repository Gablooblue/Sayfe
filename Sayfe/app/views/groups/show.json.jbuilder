json.partial! 'groups/group', group: @group
json.members @members, partial: 'groups/members', as: :members
json.announcements @announcements, partial: 'announcements/announcement', as: :announcements
