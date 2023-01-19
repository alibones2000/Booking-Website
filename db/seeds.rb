puts "SKIDY DOB DOB"

require 'faker'

5.times{
    User.create!(
        email: Faker::Internet.email,
        password_digest: "123"
    )
} 


h1 = Hotel.create!(name: 'Garza Blanca Resort & Spa Cancun', location: 'Cancun', rating: 4, images: 'https://www.garzablancaresort.com/cms/resources/garza-blanca-cancun-w375h281.jpg', phone_number: '(877) 929-7329')
h2 = Hotel.create!(name: 'Wyndham Alltra Cancun', location: 'Cancun', rating: 4, images: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/e0/2d/panama-jack-resorts-cancun.jpg?w=700&h=-1&s=1', phone_number: '+52 998 881 5500')
h3 = Hotel.create!(name: 'Motto by Hilton New York City Chelsea', location: 'New York City', rating: 5, images: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/83/c9/f0/exterior.jpg?w=700&h=-1&s=1', phone_number: '(212) 668-8624')
h4 = Hotel.create!(name: 'Hard Rock Hotel New York', location: 'New York City', rating: 4, images: 'https://hospitalitydesign.com/wp-content/uploads/2022/08/hard-rock-hotel-new-york_lobby.jpg', phone_number: '(212) 970-1200')
    
r1 = Room.create!(hotel_id: h1.id, beds: "Queen Bed", images:"https://www.taferresorts.com/cms/resources/suite-junior-suite-garden-view-garza-blanca-cancun-hd.jpg", price: 342)
r2 = Room.create!(hotel_id: h1.id, beds: "King Bed", images: "https://www.garzablancaresort.com/cms/resources/ultra-two-bedroom-panorama-suite-garza-blanca-puerto-vallarta-min-w480h290.jpg", price: 633)
r3 = Room.create!(hotel_id: h1.id, beds: "Double Beds", images: "https://www.garzablancaresort.com/blog/wp-content/uploads/2021/04/junior-suite-garza-blanca-cancun-m-2.jpg", price: 381)
r4 = Room.create!(hotel_id: h2.id, beds: "Queen Bed", images: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/a8/14/09/panama-jack-resorts-cancun.jpg", price: 488)
r5 = Room.create!(hotel_id: h2.id, beds: "King Bed", images: "https://images.trvl-media.com/hotels/1000000/30000/28200/28108/ece0a101.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium", price: 598)
r6 = Room.create!(hotel_id: h2.id, beds: "Double Bed", images: "https://images.trvl-media.com/hotels/1000000/30000/28200/28108/a132be7f.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium", price: 558)
r7 = Room.create!(hotel_id: h3.id, beds: "Queen Bed", images: "https://i.travelapi.com/hotels/69000000/68110000/68102900/68102889/ee84bfdc_z.jpg", price: 225)
r8 = Room.create!(hotel_id: h3.id, beds: "King Bed", images: "https://www.hilton.com/im/en/NYCDLUA/17350848/mottochelsea-joethomas-13.jpg?impolicy=resize&rh=213&rw=319", price: 297)
r9 = Room.create!(hotel_id: h3.id, beds: "Double Beds", images: "https://www.hilton.com/im/en/NYCDLUA/16491369/mottochelsea-joethomas-14.jpg?impolicy=resize&rh=213&rw=319", price: 307)
r10 = Room.create!(hotel_id: h4.id, beds: "Queen Bed", images: "https://ak-d.tripcdn.com/images/0220x120009kkq9fa986A_R_960_660_R5_D.jpg", price: 405)
r11 = Room.create!(hotel_id: h4.id, beds: "King Bed", images: "https://www.hardrockhotels.com/new-york/files/6382/16867372_ImageLargeWidth.jpg", price: 341)
r12 = Room.create!(hotel_id: h4.id, beds: "Double Beds", images: "https://www.hardrockhotels.com/new-york/files/6382/16828056_ImageLargeWidth.jpg", price: 339)

b1 = Booking.create!(user_id: User.first.id, room_id: r1.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b2 = Booking.create!(user_id: User.last.id, room_id: r2.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b3 = Booking.create!(user_id: User.last.id, room_id: r3.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 4)
b4 = Booking.create!(user_id: User.second.id, room_id: r4.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b5 = Booking.create!(user_id: User.third.id, room_id: r5.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b6 = Booking.create!(user_id: User.fourth.id, room_id: r6.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 4)
b7 = Booking.create!(user_id: User.second.id, room_id: r7.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b8 = Booking.create!(user_id: User.third.id, room_id: r8.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b9 = Booking.create!(user_id: User.first.id, room_id: r9.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 4)
b10 = Booking.create!(user_id: User.fourth.id, room_id: r10.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b11 = Booking.create!(user_id: User.second.id, room_id: r11.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 2)
b12 = Booking.create!(user_id: User.last.id, room_id: r12.id, date_from: '01/26/2023', date_to: '02/02/2023', travelers: 4)

Payment.create!(user_id: User.first.id, booking_id: b1.id, total: 2052, room_id: r1.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.second.id, booking_id: b2.id, total: 3798, room_id: r2.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.third.id, booking_id: b3.id, total: 2286, room_id: r3.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.fourth.id, booking_id: b4.id, total: 2928, room_id: r4.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.last.id, booking_id: b5.id, total: 3588, room_id: r5.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.first.id, booking_id: b6.id, total: 3348, room_id: r6.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.second.id, booking_id: b7.id, total: 1350, room_id: r7.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.third.id, booking_id: b8.id, total: 1782, room_id: r8.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.fourth.id, booking_id: b9.id, total: 1842, room_id: r9.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.last.id, booking_id: b10.id, total: 2430, room_id: r10.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.first.id, booking_id: b11.id, total: 2046, room_id: r11.id, card: Faker::Business.credit_card_number)
Payment.create!(user_id: User.second.id, booking_id: b12.id, total: 2034, room_id: r12.id, card: Faker::Business.credit_card_number)


puts 'YES YES YES'