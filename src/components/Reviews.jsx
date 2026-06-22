// src/components/Reviews.jsx

import { useEffect, useRef } from 'react'
import reviews from '../data/reviews'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-[#E5E0D8]'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-[#E5E0D8] p-6 w-[380px] flex-shrink-0 mx-3 select-none">
      <div className="flex items-center justify-between mb-3">
        <div className="min-w-0 flex-1 mr-3">
          <h4 className="text-base font-medium text-[#2E2E2E] truncate">{review.name}</h4>
          <p className="text-xs text-[#B0A89A] truncate">{review.country}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3 italic line-clamp-5 whitespace-normal">
        "{review.text}"
      </p>
      
      <div className="flex items-center justify-between text-xs text-[#B0A89A] pt-3 border-t border-[#E5E0D8]">
        <span>{review.date}</span>
        <span className="truncate ml-2">{review.room}</span>
      </div>
    </div>
  )
}

function Reviews() {
  const trackRef = useRef(null)
  const animationRef = useRef(null)
  const positionRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const scrollSpeed = 0.5

    const animate = () => {
      positionRef.current += scrollSpeed
      
      if (positionRef.current >= track.scrollWidth / 2) {
        positionRef.current = 0
      }
      
      track.style.transform = `translateX(-${positionRef.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <section className="py-20 bg-white border-t border-[#E5E0D8] overflow-hidden">
      <div className="text-center mb-12 px-6">
        <span className="text-[#8C7343] text-sm tracking-[.3em] uppercase">
          Guest Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-normal text-[#2E2E2E] mt-3">
          Что говорят наши гости
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-[#B0A89A] text-sm">
          ★ Отзывы от гостей со всего мира
        </p>
      </div>
    </section>
  )
}

export default Reviews