/**
 * The Swayamsiddha mark.
 *
 * This is the client's actual logo, not a redraw. `public/logo-mark.png` is
 * generated from the supplied `logo.jpg` by mapping ink density to alpha, so
 * the white paper background drops out and the mark keeps its real
 * hand-cut petal shapes and crown.
 *
 * It is applied as a CSS mask filled with `currentColor`, which means the same
 * single asset tints to any colour the surrounding context needs — bright
 * green on the dark grounds, deep green on bone — with no second file and no
 * blend-mode tricks.
 *
 * To regenerate after a logo change, or to swap in a vector: see README.md.
 */

export function Mandala({
  size,
  className,
  title,
}: {
  /** Omit to let CSS size the mark — avoids fighting inline styles with !important. */
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <span
      className={`mandala${className ? ` ${className}` : ""}`}
      style={size ? { width: size, height: size } : undefined}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    />
  );
}
