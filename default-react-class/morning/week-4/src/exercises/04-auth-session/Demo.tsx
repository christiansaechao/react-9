import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import ProtectedPanel from "./ProtectedPanel";

export default function Demo() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <ProtectedPanel />
    </div>
  );
}
