/**
 * Static, lightweight background — subtle grid + faint accent glow.
 * No animation: keeps the dark-minimal look fast on every device.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-zinc-950" aria-hidden="true">
      {/* faint accent glow at the top */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(52,211,153,0.10),transparent_55%)]" />

      {/* subtle grid, masked so it fades toward the edges */}
      <div
        className="absolute inset-0 [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        }}
      />
    </div>
  )
}
