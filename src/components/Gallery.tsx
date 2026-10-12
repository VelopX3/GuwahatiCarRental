export default function Gallery() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.webp",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.webp",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
  ];

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-xs text-cyan-500 uppercase font-bold tracking-widest mb-2">Build Trust</p>
          <h2 className="text-3xl font-bold">Our Happy Customers & Cars</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl group shadow-sm bg-zinc-100">
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
