# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


coffees = [
{
    name: "Huggy Delight", 
    country: "Chichontepec, El Salvador",
    price: 6.95,
    image_url:"https://biteswithbri.com/wp-content/uploads/2021/12/WhiteChocolateMocha-blog-1.jpg"
},
 {
    name: "Winter Level", 
    country: "Turrialba, Costa Rica",
    price: 2,
    image_url: "https://lifestyleofafoodie.com/wp-content/uploads/2022/07/Starbucks-caramel-macchiato-latte-9-of-14.jpg"
},
{
    name: "Café Coffee", 
    country: "Antigua, Guatemala",
    price: 4,
    image_url: "https://www.acouplecooks.com/wp-content/uploads/2021/12/Mocha-Cappuccino-004.jpg"
},
{
    name: "Chocolate Volcano", 
    country: "Oaxaca, Mexico",
    price: 4.90,
    image_url: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.latte_.updated-6483.jpg"
},
{
    name: "Street", 
    country: "Kisii, Kenya",
    price: 3.75,
    image_url: "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Dalgona-Coffee-683x1024.jpg"
},
{
    name: "Brooklyn Delight", 
    country: "Mount Elgon, Uganda",
    price: 6.00,
    image_url:"https://www.forkinthekitchen.com/wp-content/uploads/2022/07/220629.iced_.latte_.vanilla-8882.jpg"
}
]

Coffee.create!(coffees)

reviews = [{ title:'great coffee', description: 'qwerty' }, { title: 'wow that bitter', description: 'test description' }]

Coffee.all.each do |coffee|
    review_sample = reviews.sample
    Review.create!({ 
        coffee_id: coffee.id, 
        title: review_sample[:title], 
        description: review_sample[:description] 
})
end

