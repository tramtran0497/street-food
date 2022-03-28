import ld1A from "../public/img/menu-ld-1A.avif"
import ld1B from "../public/img/menu-ld-1B.avif"
import ld2A from "../public/img/menu-ld-2A.avif"
import ld2B from "../public/img/menu-ld-2B.avif"
import ld3 from "../public/img/menu-ld-3AB.avif"
import ld4A from "../public/img/menu-ld-4A.avif"
import ld4B from "../public/img/menu-ld-4B.avif"
import ld5A from "../public/img/menu-ld-5A.avif"
import ld5B from "../public/img/menu-ld-5B.avif"

import food1 from "../public/img/product-1.avif"
import food2 from "../public/img/product-2.avif"
import food3 from "../public/img/product-3.avif"
import food4 from "../public/img/product-4.avif"
import drink1 from "../public/img/drink-1.avif"
import drink2 from "../public/img/drink-2.avif"
import drink3 from "../public/img/drink-3.avif"
import drink4 from "../public/img/drink-4.avif"

import career1 from "../public/img/career-1.avif"
import career2 from "../public/img/career-2.avif"
import career3 from "../public/img/career-3.avif"

import event1 from "../public/img/event-1.avif"
import event2 from "../public/img/event-2.avif"
import event3 from "../public/img/event-3.avif"
import event4 from "../public/img/event-4.avif"

export const listFoods = [
    {
        name: "Cheese Tokbokki",
        img: food1,
    },
    {
        name: "Ramen",
        img: food2,
    },
    {
        name: "Pork Dumpling",
        img: food3,
    },
    {
        name: "Crispy Chicken",
        img: food4,
    },
]

export const listDrinks = [
    {
        name: "Brown Sugar Bubble Milk Tea",
        img: drink1,
    },
    {
        name: "Berries Smoothy",
        img: drink2,
    },
    {
        name: "Chocolate Ice Blend",
        img: drink3,
    },
    {
        name: "Mint Orange",
        img: drink4,
    },
]

export const lunchDinnerMenu = [
    {
        id: 1,
        day: "Monday - Lunch",
        name: "Korean Mixed Rice",
        price: 10.9,
        img: ld1A,
    },
    {
        id: 2,
        day: "Monday - Dinner",
        name: "Korean Crispy Chicken",
        price: 12.9,
        img: ld1B,
    },
    {
        id: 3,
        day: "Tuesday - Lunch",
        name: "Mushroom Udon",
        price: 10.9,
        img: ld2A,
    },
    {
        id: 4,
        day: "Tuesday - Dinner",
        name: "Teriyaki Ramen",
        price: 11.5,
        img: ld2B,
    },
    {
        id: 5,
        day: "Wednesday",
        name: "Sushi's Buffet Day",
        price: 12.9,
        img: ld3,
    },
    {
        id: 6,
        day: "Thursday - Lunch",
        name: "Pork Rib Sweet Sour",
        price: 10.9,
        img: ld4A,
    },
    {
        id: 7,
        day: "Thursday - Dinner",
        name: "Beijing Duck Rice",
        price: 11.9,
        img: ld4B,
    },
    {
        id: 8,
        day: "Friday - Lunch",
        name: "Bun Thit Nuong",
        price: 10.9,
        img: ld5A,
    },
    {
        id: 9,
        day: "Friday - Dinner",
        name: "South Family Meal Style",
        price: 12.9,
        img: ld5B,
    },
]

export const mainMenu = [
    {
        id: 1,
        name: "Kim Chi Hot Pot",
        price: 24.9,
        ingredients: "Pork slices, Kimchi, Mushrooms, Cabbage, Tofu",
        extraInfo: "For 2-3 people"
    },
    {
        id: 2,
        name: "Goi Chao Ga",
        price: 22.9,
        ingredients: "Chicken, Rice, Cabbage, Carrot, Chilli, Onion, Mushrooms, Peanut",
        extraInfo: "For 2 people"
    },
    {
        id: 3,
        name: "Beijing Duck with Dumpling",
        price: 24.5,
        ingredients: "Grilled Duck, Dumpling, Salad and Cucumber",
        extraInfo: "For 2 people"
    },
    {
        id: 4,
        name: "Seafood Sashimi",
        price: 39.9,
        ingredients: "Fresh Salmon, Tuna, Squid, Shrimp, Wasabi and Ginger",
        extraInfo: "For 2-3 people"
    },
    {
        id: 5,
        name: "Sontam",
        price: 19.9,
        ingredients: "Fresh Crab, Papaya, Tomatoes, Cabbage, Chilli, Fish sauces",
        extraInfo: "For 2 people"
    },
    {
        id: 6,
        name: "Grilled Korean Style",
        price: 49.9,
        ingredients: "Pork slices, Beef ribs or slices, Kimchi, Salad, Korean sauces",
        extraInfo: "For 3-4 people"
    },
]
    
export const drinkMenu = [
    {
        id: 1,
        name:"Mixed Full Topping Milk Tea",
        ingredients:"Chocolate pudding, Flan, Bubble, Cheese jelly, Milk tea",
        extraInfo: "You can change level of sweet.",
        price: 7.9,
    },
    {
        id: 2,
        name:"Fruit Smoothy",
        ingredients: "Fruits: Strawberry, Coconut with Cacao Powder, Avocado",
        extraInfo: "You can choose which one you love.",
        price: 6.9,
    },
    {
        id: 3,
        name:"Fruit Juice",
        ingredients: "Fruits: Orange, Pearl, Watermelon, Pineapple, Apple",
        extraInfo: "You can choose which one you love.",
        price: 6.9,
    },
    {
        id: 4,
        name:"Original Milk Tea",
        ingredients:"Bubble and Milk tea, Cheese foam",
        extraInfo: "You can change level of sweet.",
        price: 5.9,
    },
    {
        id: 5,
        name:"Soju Wine/ Rice Wine",
        ingredients:"",
        extraInfo: "Soju and Rice wine: 300ml",
        price: 11.9,
    },
    {
        id: 6,
        name:"Tamanohikari Shuraku Junmai Ginjo Sake",
        ingredients:"",
        extraInfo: "Sake: 300ml",
        price: 14.9,
    },
]

export const snacksMenu = [
    {
        id: 1,
        name:"Cheese Tokbokki",
        ingredients:"Fish cake, Tokbokki cake, Mozzarella cheese and Cheese powder, Onion and Sesame",
        extraInfo: "There are 4 levels of spicy.",
        price: 11.9, 
    },
    {
        id: 2,
        name:"Crispy Chicken and Fried Potatoes",
        ingredients:"Chicken, Potatoes, Korean sauces, Sesame, Onion",
        extraInfo: "There are 4 levels of spicy.",
        price: 11.9, 
    },
    {
        id: 3,
        name:"Dumpling and Tao Bao",
        ingredients:"Flour, Pork, Mushroom, Carrot, Onion, Garlic, Soy sauces and vinegar, Ginger",
        extraInfo: "Hong Kong styles",
        price: 10.9, 
    },
    {
        id: 4,
        name:"Doraemon and Fish Cake",
        ingredients:"Red bean, flour, Sugar, Milk",
        extraInfo: "With 1 big size of TeaTee glass.",
        price: 10.9, 
    },
    {
        id: 5,
        name:"Goi Cuon",
        ingredients:"Shrimp, Pork, Salad, Cucumber, Carrot, Rice noddles, Rice paper, Vegetables",
        extraInfo: "There are 4 rolls with Vietnamese sauces from peanuts.",
        price: 11.9, 
    },
    {
        id: 6,
        name:"Bot Chien",
        ingredients:"Flour, Papaya, Eggs, Onion, Soy sauces, Chilli",
        extraInfo: "There are 4 levels of spicy.",
        price: 10.9, 
    },
]
    

export const recruitList = [
    {
        jobName: "Manager Store",
        img: career1,
        qty: 1,
        reqs: [
            "Experience same position at least 1 year.",
            "Using Maraplan tool to support plan the schedule.",
            "Training employees.",
            "Ordering ingredients and stuffs once monthly.",
            "Others are shared in the interview."
        ]
    },
    {
        jobName: "Waiter/Waitress",
        img: career3,
        qty: 2,
        reqs: [
            "No experience is no big problem, you have your trial period.",
            "Speaking fluency English, Finnish or Vietnamese is a plus.",
            "Good attitude, good listener.",
            "Others are shared in the interview."
        ]
    },
    {
        jobName: "Cashier",
        img: career2,
        qty: 1,
        reqs: [
            "No experience is no big problem, you have your trial period.",
            "Speaking fluency Finnish and English, adding Vietnamese is a plus.",
            "Joviality with customers.",
            "Others are shared in the interview."
        ]
    },
]

export const eventList = [
    {
        id: 1,
        eventName: "Friends Day",
        img: event1,
        firstWord: "Inviting your friends to 'TeeTea' to catch discounts!",
        des: "Spring is coming, let's go out and chill with your friends at TeeTea. There are huge of delicious foods and creative drinks are waiting for you. One special event, 'An Interesting Game' is taken place about 19:00 - 20:00 everyday and remember this game for your friends group, many discounts are your gifts. Besides, you have a great moment with your best friends. Do you join anf play the game?",
    },
    {
        id: 2,
        eventName: "Woman's Day",
        img: event2,
        firstWord: "Taking your important women in your life and giving them the best!",
        des: "8-3-2022, 'Happy Woman's Day' and wishing all best to you. This is the best time of you to show your love to girls or women, inviting them to TeeTea and taking them photos to get discounts, Why not?",
    },
    {
        id: 3,
        eventName: "What is news in your social?",
        img: event3,
        firstWord: "Taking delicious foods and drinks photos and posting on your social media, sharing the best to your family and friends!",
        des: "New event!!! Take photos and share them right now. It does not waste your time, just a few minutes, however, you bring a power gift to your friends and family with delicious pervasive. Let's share your chill moment! Specially, if your pic gets more 500 likes in a hour, you catch a free delicious food and drinks table."
    },
    {
        id: 4,
        eventName: "Become Our Friendly Customer",
        img: event4,
        firstWord: "It is time for you to become our friendly customer, let's join with us! Creating a new member card in a second!",
        des:"Many many many big gifts for new members, why not be our customers? If you are a freshmen, your first order has 10% discount with best sellers foods and drinks and the next order gets 20% discount if you bring another new member to TeeTea restaurant. Besides, we always update new events everyday, weekly and monthly, every moment. Please do not miss them! they are the gifts of TeeTea to our customers, Thank you! "
    },
]