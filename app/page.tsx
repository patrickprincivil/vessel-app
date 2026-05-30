export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>⚓ Welcome to Vessel</h1>

        <p>
          Vessel is your digital ecosystem for business, journal records,
          programs, creative work, file handling, operations, and future online services.
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

        <div className="card">
          <h2>File Handler</h2>
          <p>Manages uploaded files, documents, PDFs, images, records, and archives.</p>
        </div>

        <div className="card">
          <h2>Document Archive</h2>
          <p>Stores constitution files, legal documents, reports, journals, and public records.</p>
        </div>

        <div className="card">
          <h2>Media Files</h2>
          <p>Organizes images, videos, audio, music files, graphics, and creative media.</p>
        </div>
      </section>
    </main>
  );
}

