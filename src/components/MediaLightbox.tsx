"use client";

import Image from "next/image";
import { useState } from "react";

export function MediaLightbox() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="video-card" onClick={() => setOpen(true)} aria-label="Play england campaign film">
        <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80" alt="" fill sizes="160px" />
        <span className="video-play">▶</span><span className="video-caption">THE MAKING OF<br /><strong>BETTER MOVEMENT</strong></span>
      </button>
      {open && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Campaign film" onClick={() => setOpen(false)}>
        <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close video">×</button>
        <video controls autoPlay playsInline>
          <source src="/media/campaign-film.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
        <p>Campaign film placeholder — add your licensed film at <code>public/media/campaign-film.mp4</code>.</p>
      </div>}
    </>
  );
}
