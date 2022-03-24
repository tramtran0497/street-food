import {useState} from "react"
import styles from "../styles/Event.module.css"
import event1 from "../public/img/event-1.avif"
import event2 from "../public/img/event-2.avif"
import event3 from "../public/img/event-3.avif"
import event4 from "../public/img/event-4.avif"
import { EventCard } from "../Components/EventCard"

const eventList = [
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

export default function Event() {
    return(
        <div className={styles.container}>
            <h1>NEWS</h1>
            <div className={styles.eventCards}>
                {eventList.map(event => <EventCard event={event}/>)}
            </div>
        </div>
    )
}