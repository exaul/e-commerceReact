export function Navbar({ children }) {
  return (
    <>
      <button class="cs-button" data-filter="one">
        {children}
      </button>
    </>
  );
}
