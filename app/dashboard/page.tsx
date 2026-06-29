import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import RecentProjects from "./components/RecentProjects";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <StatsCards />

        <RecentProjects />

      </main>

    </div>
  );
}