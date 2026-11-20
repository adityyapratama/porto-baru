"use client";

import { useState, type ReactNode } from "react";
import { Sticker } from "@/stickers/Sticker";
import { bulb } from "@/stickers/icons";

/** Chip that flips as soon as the pointer touches it (keyboard focus works too) to reveal a second message with the fun-isometric bulb. */
export default function FlipChip({ front, back }: { front: ReactNode; back: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flipchip${flipped ? " is-flipped" : ""}`}
      tabIndex={0}
      aria-label={back}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <div className="flipchip-inner">
        <div className="flipchip-face">{front}</div>
        <div className="flipchip-face back">
          <div className="flex h-14 w-14 flex-none items-center justify-center">
            <div style={{ width: 84, flex: "none", margin: "-14px" }}>
              <Sticker icon={bulb} enter={0.1} replayOnHover label="Light bulb" />
            </div>
          </div>
          <span className="text-[15px] font-medium leading-tight">I like to design and dev.</span>
        </div>
      </div>
    </div>
  );
}
