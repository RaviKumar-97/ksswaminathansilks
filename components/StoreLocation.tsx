export default function StoreLocation() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Visit Our Offline Store
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="K.S.Swaminathan Silks store location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.2583988400133!2d79.24974209999999!3d12.4990244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacd6d49662c95b%3A0x71c50764ae91776e!2sK.S.Swaminathan%20Silks!5e0!3m2!1sen!2sin!4v1773470778643!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
