'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import s from './style.module.css'

export default function Gallery() {
  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    32, 33, 34, 35
  ];

  const [visibleCount, setVisibleCount] = useState(10); // Display 10 images initially (2 rows of 5 columns)

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, images.length));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
      <div id={s.gallery_section} style={{ width: '100%' }}>
        {images.slice(0, visibleCount).map(num => (
          <Image 
            key={num} 
            src={`/asset_2026/hop/${num}.jpg`} 
            alt={`Brodard Box ${num}`} 
            width={400} 
            height={400} 
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        ))}
      </div>
      
      {visibleCount < images.length && (
        <button 
          onClick={handleShowMore}
          style={{
            marginTop: '30px',
            marginBottom: '50px',
            backgroundColor: 'transparent',
            color: 'var(--color-brodard, #31481e)',
            border: '1px solid var(--color-brodard, #31481e)',
            padding: '12px 35px',
            fontFamily: "'Jose', sans-serif",
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-brodard, #31481e)';
            e.target.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--color-brodard, #31481e)';
          }}
        >
          Xem thêm mẫu hộp
        </button>
      )}
    </div>
  );
}
