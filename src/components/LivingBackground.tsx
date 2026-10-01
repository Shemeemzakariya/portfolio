/** Slow drifting light orbs + faint grain, fixed behind the whole page. */
export default function LivingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="orb orb-a" />
      <div className="orb orb-b hidden md:block" />
      <div className="orb orb-c hidden md:block" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
