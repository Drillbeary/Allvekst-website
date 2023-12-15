import React from 'react';

const Allvekst = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Allvekst</h1>
        {/* Add any additional header elements or navigation here */}
      </header>

      <main>
        <section className="company-summary">
          <h2>About Allvekst</h2>
          <p>
            Allvekst AS er en vekstbedrift beliggende på Kyrksæterøra i Heim kommune. 
            Allvekst er et aksjeselskap og eies hundre prosent av Heim kommune.

            Allvekst AS sysselsetter ca 50 personer. 
            Hver avdeling har sin leder, som igjen har ansvar for organisering, 
            sysselsetting og oppfølging av budsjett/regnskapstall for sin avdeling.

          </p>
          {/* Add more information about the company */}
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <p>inkluderer byggeprosjekt,  servicer omfatter plenslått og rydding av kommunale eiendommer. Vi driver også gjenvinningsstasjonen for ReMidt</p>
        </section>
      </main>

      <footer>
        {/* Add any footer content or links here */}
      </footer>
    </div>
  );
};

export default Allvekst;