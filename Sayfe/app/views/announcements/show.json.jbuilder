json.partial! 'announcements/announcement', announcement: @announcement

json.user @announcement.user, partial: 'users/user', as: :user
