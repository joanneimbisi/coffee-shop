# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# coffees = [
# {
#     name: Faker::Coffee.blend_name, 
#     country: Faker::Coffee.origin,
#     price: Faker::Number.between(from: 1, to: 10)
# },
# {
#     name: Faker::Coffee.blend_name, 
#     country: Faker::Coffee.origin,
#     price: Faker::Number.between(from: 1, to: 10)
# },
# {
#     name: Faker::Coffee.blend_name, 
#     country: Faker::Coffee.origin,
#     price: Faker::Number.between(from: 1, to: 10)
# },
# {
#     name: Faker::Coffee.blend_name, 
#     country: Faker::Coffee.origin,
#     price: Faker::Number.between(from: 1, to: 10)
# },
# {
#     name: Faker::Coffee.blend_name, 
#     country: Faker::Coffee.origin,
#     price: Faker::Number.between(from: 1, to: 10)
# },
# {
#     name: Faker::Coffee.blend_name, 
#     country: Faker::Coffee.origin,
#     price: Faker::Number.between(from: 1, to: 10)
# }
# ]


20.times do
    Coffee.create!(name: Faker::Coffee.blend_name, country: Faker::Coffee.origin,
                    price: Faker::Number.between(from: 1, to: 10))
end


