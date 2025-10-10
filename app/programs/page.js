import ProgramsSection from './ProgramsSection';
import ScheduleSection from './ScheduleSection';


export const metadata = {
    title: "Programs | Curriculum at Melora Play School",
    description: "Discover Melora Play School’s programs designed for early childhood development, creativity, and holistic learning experiences.",
};

export default function ProgramsPage() {
    return (
        <main>

            <ProgramsSection />
            <ScheduleSection />
        </main>
    );
}
