import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const [state, handleSubmit] = useForm("mvgkvkpe");

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    width: "250px",
    fontSize: "1rem"
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#e8e9ed", color: "#345966", padding: "2rem" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Karta: The #1 App for Students is Almost Here.</h1>
        <p style={{ fontSize: "1.2rem" }}>Sign up now to get 3 months of free access when we launch.</p>
      </section>

      {/* What is Karta */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>What is Karta?</h2>
        <p>Karta is a platform that helps students study smarter with AI tools and note sharing.</p>
        <ul>
          <li>✅ AI-powered study tools</li>
          <li>✅ Peer-to-peer note marketplace</li>
          <li>✅ Student collaboration features</li>
        </ul>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "3rem 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Who We Are</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          <div style={cardStyle}>👨‍💼<br />Managing Director – Drives the vision and strategy</div>
          <div style={cardStyle}>💻<br />IT Director: Jerome – Oversees web and app development</div>
          <div style={cardStyle}>🗂️<br />Secretary – Coordinates meetings, communications, and reports</div>
          <div style={cardStyle}>💰<br />Finance Officer – Manages accounts, pricing model, and reporting</div>
        </div>
      </section>

      {/* Get Early Access */}
      <section style={{ padding: "3rem 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Get Early Access</h2>
        <p>Be among the first to experience Karta. Sign up now and get 3 months free when we launch.</p>
        {!state.succeeded ? (
          <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="text" name="full-name" placeholder="Full Name" required />
            <ValidationError prefix="Name" field="full-name" errors={state.errors} />

            <input type="email" name="email" placeholder="Email Address" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <select name="education-level" required>
              <option value="">Education Level</option>
              <option>Secondary</option>
              <option>Sixth Form</option>
              <option>University</option>
            </select>
            <ValidationError prefix="Education Level" field="education-level" errors={state.errors} />

            <button type="submit" disabled={state.submitting} style={{ backgroundColor: "#345966", color: "#fff", padding: "0.5rem" }}>
              Join the Waitlist
            </button>
          </form>
        ) : (
          <p style={{ color: "green" }}>Thanks! You’re now on the waitlist.</p>
        )}
      </section>

      {/* Contact Us */}
      <footer style={{ backgroundColor: "#f2f2f2", padding: "2rem", textAlign: "center", marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Contact Us</h2>
        <p>Email: <a href="mailto:kartaajaminicompany@gmail.com">kartaajaminicompany@gmail.com</a></p>
        <p>Phone: +356 9955 0314</p>
        <p>Instagram: <a href="https://instagram.com/karta.app.ja" target="_blank">@karta.app.ja</a></p>
        <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#888" }}>
          Built by students. Backed by ambition.
        </p>
      </footer>
    </div>
  );
}
