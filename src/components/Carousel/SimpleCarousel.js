// import React, { useRef } from 'react';
// import Image from 'next/image';

// const SimpleCarousel = () => {
//   const carouselRef = useRef(null);

//   const nextSlide = () => {
//     carouselRef.current.next();
//   };

//   const prevSlide = () => {
//     carouselRef.current.prev();
//   };
//   const slides = [
//     {
//       imageUrl: 'https://via.placeholder.com/800x400',
//       caption: 'Slide 1',
//     },
//     {
//       imageUrl: 'https://via.placeholder.com/800x400',
//       caption: 'Slide 2',
//     },
//     // tambahkan slide selanjutnya jika diperlukan
//   ];

//   return (
//     <div className="relative">
//       <div className="carousel" ref={carouselRef}>
//         {slides.map((slide, index) => (
//           <div key={index} className="carousel-slide">
//             <Image src={slide.imageUrl} alt={slide.caption} className="w-full" />
//             <div className="carousel-caption">{slide.caption}</div>
//           </div>
//         ))}
//       </div>
//       <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md">
//         Prev
//       </button>
//       <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md">
//         Next
//       </button>
//     </div>
//   );
// };

// export default SimpleCarousel;
