# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Disaster.create(title: 'swag', desc: 'what');

User.create(email: 'test@test.com', password:'testtest', password_confirmation: 'testtest')
User.create(email: 'gabloogame@gmail.com', password:'testtest', password_confirmation: 'testtest')

Post.create(intensity: "test", desc: 'test', longtitude: 1, latitude: 2, disaster_id: 1, user_id: 2);

