 import Logo from "../ui/Logo";
export default function Navbar(){
  return (
    <header className="ecl-header">
      <div className="ecl-brand">

        <Logo />

        <div>
          <h1>ECLIPSIA</h1>

          <p>Corporation Ltd</p>

          <small>Swing Confluence Terminal</small>
        </div>
      </div>

      <p>
        Chart-image analysis · live news check · strict 1:3–1:4 risk discipline.
      </p>
    </header>
  );
}