json.partial! 'users/user', user: @user

json.friends @user.friends do |friend|
    json.id friend.id
    json.first_name friend.first_name
    json.last_name friend.last_name
    json.email friend.email
end

json.groups @user.groups do |group|
    json.id group.id
    json.name group.name
end
