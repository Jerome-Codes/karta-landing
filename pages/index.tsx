import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const [state, handleSubmit] = useForm("mvgkvkpe");

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

      {/* Team Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Who We Are</h2>
        <p>Jerome – IT Director. Loves clean code and clean UI.</p>
        <p>Anna – UX Designer. Runs on coffee and inspiration.</p>
        <p>Mark – Content Lead. Karaoke king and meme expert.</p>
      </section>

      {/* Why This Website Exists */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Why This Website Exists</h2>
        <p>Karta is launching soon. This page is for early signups from 1,000–2,000 university students.</p>
        <p style={{ color: "#61a5af", fontWeight: "bold" }}>Sign up now and get 3 months of free access — limited time only!</p>
      </section>

      {/* Sign-Up Form */}
      <section>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Sign Up</h2>
        {state.succeeded ? (
          <p style={{ color: "green" }}>Thank you for signing up!</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
            <input type="text" name="full-name" placeholder="Full Name" required />
            <ValidationError prefix="Name" field="full-name" errors={state.errors} />

            <input type="email" name="email" placeholder="Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <select name="education-level" required>
              <option value="">Education Level</option>
              <option>Secondary</option>
              <option>6th Form</option>
              <option>University</option>
            </select>
            <ValidationError prefix="Education Level" field="education-level" errors={state.errors} />

            <button type="submit" disabled={state.submitting} style={{ backgroundColor: "#345966", color: "#fff", padding: "0.5rem" }}>
              Submit
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
