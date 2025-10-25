'use client';
import React from 'react';
import Image from 'next/image';
import '../style/_events.css';
import Hero from "../components/Hero";

const sections = [
    {
        type: 'Outdoor Activities',
        events: [
            {
                title: '🚌 School Trips',
                description: 'Safe and exciting trips that take our kids beyond the classroom, exploring parks, farms, museums, and discovery centers.',
                images: [
                    '/images/trip1.png',
                    '/images/trip2.jpeg',
                    '/images/movie_melora.jpg',
                    '/images/outside.jpg',
                ]
            }
        ]
    },
    {
        type: 'Sports',
        events: [
            {
                title: '🏃‍♀️ Sports Day',
                description: 'An action-packed day filled with fun races, relays, and friendly competitions where kids challenge themselves and build teamwork.',
                images: [
                    '/images/sports6.jpeg',
                    '/images/sports2.jpeg',
                    '/images/sports3.jpeg',
                    '/images/sports4.jpeg',
                ]
            }
        ]
    },
    {
        type: 'Festivals',
        events: [
            {
                title: '🎉 Festival Celebrations',
                description: 'Celebrating diversity and culture with Diwali, Christmas, Teej, and Independence Day events full of joy, colors, and community spirit.',
                images: [
                    '/images/diwali.jpg',
                    '/images/melora_happy1.jpg',
                    '/images/santa.jpg',
                    '/images/meloraHappy.jpg'
                ]
            }
        ]
    }

];

export default function EventsPage() {
    return (
        <>
            <Hero
                title="Our Events"
                subtitle="Celebrating Fun, Learning, and Memories"
                description="Discover the wide range of events we organize to make every day special for our children."
            />

            <section>
                {sections.map((section, idx) => (
                    <div key={idx} className="event-section">
                        <h2 className="section-header">{section.type}</h2>
                        {section.events.map((event, i) => (
                            <div key={i} className={`event-card ${i % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="event-text">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                                <div className="event-images">
                                    {event.images.map((src, j) => (
                                        <div
                                            key={j}
                                            className={`image-wrapper ${j % 2 === 0 ? 'float' : ''}`}
                                        >
                                            <Image
                                                src={src}
                                                alt={`${event.title} image ${j + 1}`}
                                                width={650}
                                                height={390}
                                                priority={true}
                                            />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </>
    );
}
