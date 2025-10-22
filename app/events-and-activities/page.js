import EventWrapper from "./EventWrapper";
export const metadata = {
    title: "Events | Melora Play School Activities & Celebrations",
    description:
        "Stay updated on upcoming events, celebrations, and special activities at Melora Play School, making learning fun for every child.",
};

export default function Page() {
    return (
        <div className="app-wrapper">
            <main className="main-content">
                <EventWrapper />
            </main>
        </div>
    );
}
