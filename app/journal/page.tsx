export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>⚓ Welcome to Vessel</h1>

        <p>
          Vessel is your digital ecosystem for business, journal records,
          programs, creative work, operations, and future online services.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Journal</h2>
          <p>Organize notes, archives, documents, and project records.</p>
        </div>

        <div className="card">
          <h2>Programs</h2>
          <p>Build and manage business, civic, education, and service programs.</p>
        </div>

        <div className="card">
          <h2>Dashboard</h2>
          <p>Track systems, tools, accounts, payments, and operations.</p>
        </div>
      </section>
    </main>
  );
}

