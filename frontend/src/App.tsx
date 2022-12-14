import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard"
import { ToastContainer } from "react-toastify";
export default function App() {

  return (
  <div>
    <ToastContainer />
    <Header />
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
        </div>
      </section>
    </main>
  </div>
  );
};

