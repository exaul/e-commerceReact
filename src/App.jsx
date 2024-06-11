import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <section id="collection-1602">
        <div class="cs-container">
          <div class="cs-content">
            <Header>New Collection</Header>
            <div class="cs-button-group">
              <Navbar> New Arrival</Navbar>
              <Navbar> Top Rating</Navbar>
              <Navbar>Best Seller </Navbar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
