import "./App.css";

function Navbar({ children }) {
  return (
    <>
      <button class="cs-button" data-filter="one">
        {children}
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <section id="collection-1602">
        <div class="cs-container">
          <div class="cs-content">
            <h2 class="cs-title">New Collection</h2>
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
