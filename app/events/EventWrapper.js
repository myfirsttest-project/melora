"use client";
import dynamic from "next/dynamic";

const EventSection = dynamic(() => import("./Event"), {
    ssr: false,
    loading: () => <p>Loading events...</p>,
});

export default function EventWrapper() {
    return <EventSection />;
}
