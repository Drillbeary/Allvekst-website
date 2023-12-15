import React from 'react';

const AllvekstMedia = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Allvekst Media</h1>
        {/* Add any additional header elements or navigation here */}
      </header>

      <main>
        <section className="company-summary">
          <h2>About Allvekst Media</h2>
          <p>
            Allvekst Media specializes in delivering cutting-edge IT solutions to meet the digital needs 
            of businesses and individuals. From web development to multimedia creation, we bring innovation
            and technology together.
          </p>
          {/* Add more information about the IT-related services */}
        </section>

        <section className="it-services">
          <h2>Our IT Services</h2>
          {/* List the various IT-related services offered by Allvekst Media */}
          {/* You can include links to specific service pages or details */}
        </section>
      </main>

      <footer>
        {/* Add any footer content or links here */}
      </footer>
    </div>
  );
};

export default AllvekstMedia;