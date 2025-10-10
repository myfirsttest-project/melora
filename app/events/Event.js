'use client';
import React from 'react';
import Image from 'next/image';
import '../style/_events.scss';
import Hero from "../components/Hero";

const eventsData = [
    {
        title: '🏃‍♀️ Sports Day',
        description: 'A day filled with excitement, friendly competition, and laughter as our children enjoy races, relays, and team games.',
        images: [
            { src: '/images/sports6.jpeg', alt: 'Children running relay race' },
            { src: '/images/sports2.jpeg', alt: 'Kids playing tug of war' },
            { src: '/images/sports3.jpeg', alt: 'Children celebrating victory' },
            { src: '/images/sports4.jpeg', alt: 'Team relay finish line' },
        ],
    },
    {
        title: '🎉 Festival Celebrations',
        description: 'We celebrate diversity and culture through vibrant festivities including Diwali, Christmas, Teej, and Independence Day.',
        images: [
            { src: '/images/diwali.jpg', alt: 'Diwali Celebration' },
            { src: '/images/MeloraKids1.jpeg', alt: 'Christmas Celebration' },
            { src: '/images/festival.jpg', alt: 'Teej Celebration' },
            { src: '/images/independence.jpg', alt: 'Independence Day' },
        ],
    },
    {
        title: '🚌 School Trip',
        description: 'Our kids explore the world beyond the classroom with fun and safe trips to parks, farms, and discovery centers.',
        images: [
            { src: '/images/trip1.png', alt: 'School Trip to the park' },
            { src: '/images/trip2.jpeg', alt: 'Kids exploring farm' },
            { src: '/images/trip3.jpeg', alt: 'Children enjoying outdoors' },
        ],
    },
];

function EventBlock({ title, description, images }) {
    return (
        <article className="event-block">
            <div className="event-card">
                <h2 className="event-heading">{title}</h2>
                <p className="event-description">{description}</p>
                <div className="image-grid">
                    {images.map((img, idx) => (
                        <div key={idx} className="image-wrapper">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={500}
                                height={500}
                                className="event-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function EventsPage() {
    return (
        <section className="events-section">
            <Hero
                title="Events & Activities"
                description="At Melora Kindergarten, we believe in learning through experiences. Explore our fun-filled events and celebrations throughout the year!"
            />
            {eventsData.map((event, idx) => (
                <EventBlock
                    key={idx}
                    title={event.title}
                    description={event.description}
                    images={event.images}
                />
            ))}
        </section>
    );
}
