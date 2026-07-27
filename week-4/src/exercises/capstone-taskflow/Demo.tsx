import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import TaskList from "./TaskList";
import TaskDetailModal from "./TaskDetailModal";
import ThemeCorner from "./ThemeCorner";

export default function Demo() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ paddingLeft: 16 }}>TaskFlow</h1>
        <ThemeCorner />
      </div>
      <Toolbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <TaskList />
      </div>
      <TaskDetailModal />
    </div>
  );
}
