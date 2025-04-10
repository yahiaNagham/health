'use client';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main style={{ minHeight: 'calc(100vh - 120px)', backgroundColor: '#f5f9ff' }}>
        {/* Hero Section */}
        <section 
          style={{
            backgroundImage: 'url("/image2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'black',
            textAlign: 'center',
            padding: '5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>WELCOME TO HEALTH AI+</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '64rem', margin: '0 auto', marginBottom: '2rem' }}>
            Your trusted platform for advanced health consultations and personalized medical services powered by AI.
          </p>
        </section>
        
        {/* Services Section */}
        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', padding: '4rem 2rem', maxWidth: '90rem', margin: '0 auto' }}>
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '2.5rem',
                width: '100%',
                maxWidth: '20rem',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h2 style={{ color: '#4b6cb7', fontSize: '1.5rem', marginBottom: '1rem' }}>
                {service.title}
              </h2>
              <p style={{ color: '#4a4a4a', marginBottom: '1.5rem' }}>
                {service.description}
              </p>
              <a
                href="#"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#4b6cb7',
                  color: 'white',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3a5aa0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4b6cb7'}
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

const services = [
  {
    title: "Let's Book Your Appointment",
    description: "Easily book your appointment for a medical scan in our laboratory.",
    buttonText: "Book Appointment"
  },
  {
    title: "Let's Consult",
    description: "Consultation avec des médecins qualifiés pour des conseils de santé personnalisés.",
    buttonText: "Prendre RDV"
  },
  // Add other services here
];
