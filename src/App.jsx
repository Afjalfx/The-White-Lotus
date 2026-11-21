import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Events from "./components/Events";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const isRoomsPage = path === "/rooms";
  const isBanquetPage = path === "/banquet";
  const isContactPage = path === "/contact";
  const isFacilitiesPage = path === "/facilities";

  return (
    <div className="min-h-screen bg-cream text-slate-800">
      <Navbar />
      <main>
        {isRoomsPage ? (
          <Rooms />
        ) : isBanquetPage ? (
          <Events />
        ) : isContactPage ? (
          <Contact />
        ) : isFacilitiesPage ? (
          <Facilities />
        ) : (
          <Hero />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
