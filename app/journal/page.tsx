import Navbar from "../components/Navbar";

export default function JournalPage() {
  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Journal</h1>

        <p>
          Journal archive for documents, reports, research, media, legal notes,
          Constitution 1987, sources, and project records.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Constitution 1987</h2>
          <p>Archive and reference section.</p>
        </div>

        <div className="card">
          <h2>Legal Library</h2>
          <p>Laws, reports, references, and public records.</p>
        </div>

        <div className="card">
          <h2>Final Journal Build Steps</h2>
          <p>Save files, test locally, build, commit, and push.</p>
        </div>
      </section>

      <section className="hero">
        <h1>Faith, Healing, and National Deliverance</h1>

        <p>
          I stand in the name of Jesus Christ against idolatry, corruption,
          fear, oppression, spiritual confusion, and every practice that keeps
          families and nations in poverty.
        </p>

        <p>
          I do not bow before statues, idols, secret societies, occult systems,
          or any power that separates people from God, truth, justice, and
          righteousness.
        </p>

        <p>
          This platform calls for repentance, healing, education, lawful justice,
          protection of families, and national restoration.
        </p>

        <p>
          I pray for healing over Haiti, Canada, all nations, all families,
          all children, all communities, all animals, and all creation according
          to the will, mercy, and authority of God.
        </p>

        <p>
          This message is not written to attack people, but to call everyone out
          of darkness, corruption, violence, fear, and deception, and toward
          truth, peace, justice, and life through Jesus Christ.
        </p>
      </section>
    </main>
  );
}

