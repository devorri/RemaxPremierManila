import React from 'react';
import { Link } from 'react-router-dom';

export const JoinTeam: React.FC = () => {
  const videoUrl = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftessa.valdes%2Fvideos%2F1070778275425550%2F&show_text=false&width=500';

  return (
    <section className="join-team-section">
      <div className="join-team-video-wrapper">
        <iframe
          src={videoUrl}
          title="Facebook Video"
          className="join-team-video-iframe"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>

      <div className="join-team-container">
        <h2 className="join-team-heading">
          Your property deserves to be seen by the right people. At RE/MAX Premier, we make sure it is.        </h2>

        <p className="join-team-description">
          Here we partnered with well known Ms. Tessa Prieto Valdes to ensure that the proper target market gets reached by one of our listings. Call us whether you are thinking of selling or buying in the luxury villages in the country.
        </p>
        <Link to="/contact-us" className="btn-outline-red">
          Contact Us
        </Link>
      </div>
    </section>
  );
};
