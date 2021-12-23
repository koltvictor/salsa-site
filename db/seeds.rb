puts "Clearing database..."

User.destroy_all
Product.destroy_all

puts "Seeding Data ..."

User.create(name: "Admin", username: "Admin", email:"test@email.com", password: "password", password_confirmation: "password")

Product.create(user_id: 1, name: "Spicy Red Salsa", image: "https://i.imgur.com/e8e44cu.png", description: "This is a spicy red salsa with a little bit of a kick. It's a great way to make a quick meal!", price: 8.00)

puts "Done!"