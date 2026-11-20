"use client";
// How I work step icons: fun-isometric stickers (by Kelvin Adithya, skills.klvn.dev/fun-isometric).
import { Sticker } from "./Sticker";
import { chat, pen, phone, plane } from "./icons";

const STEP_ICONS = { chat, pen, phone, plane } as const;
export type StepIconName = keyof typeof STEP_ICONS;

export default function StepSticker({ name, offset = 0 }: { name: StepIconName; offset?: number }) {
  return <Sticker icon={STEP_ICONS[name]} offset={offset} enter={0.15} replayOnHover style={{ width: "100%" }} />;
}
