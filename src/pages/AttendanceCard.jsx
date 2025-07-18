
import AttendanceCard from "../components/AttendanceCard";
import LeaveStatus from "../components/LeaveStatus";

export default function Attendance() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AttendanceCard />
            <LeaveStatus />
        </div>

    );
}
