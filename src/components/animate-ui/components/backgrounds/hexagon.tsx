'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

const QWERTY_KEYBOARD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '/'],
];

type RoundedSquareBackgroundProps = React.ComponentProps<'div'> & {
  squareProps?: React.ComponentProps<'div'>;
  squareSize?: number;
  squareMargin?: number;
  borderRadius?: number;
};

function RoundedSquareBackground({
  className,
  children,
  squareProps,
  squareSize = 75,
  squareMargin = 3,
  borderRadius = 12,
  ...props
}: RoundedSquareBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({
    squareWidth: squareSize,
    squareHeight: squareSize,
  });

  const updateDimensions = React.useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // Calcular el tamaño del cuadrado basado en el contenedor
    // Usamos un factor de zoom más agresivo que permite que algunos cuadrados queden fuera
    const calculatedSize = Math.max(containerWidth / 8, containerHeight / 2.5);

    setDimensions({
      squareWidth: calculatedSize,
      squareHeight: calculatedSize,
    });
  }, []);

  React.useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const offsetAmount = (dimensions.squareWidth + squareMargin * 2) / 2;

  return (
    <div
      ref={containerRef}
      data-slot="rounded-square-background"
      className={cn(
        'relative size-full overflow-hidden bg-black-200 flex items-center justify-center',
        className,
      )}
      {...props}
    >
      <style>{`:root { --square-margin: ${squareMargin}px; --border-radius: ${borderRadius}px; }`}</style>
      <div className="flex flex-col gap-0">
        {QWERTY_KEYBOARD.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginLeft: rowIndex % 2 === 1 ? offsetAmount : 0,
            }}
            className="flex gap-0"
          >
            {row.map((letter, colIndex) => (
              <div
                key={`square-${rowIndex}-${colIndex}`}
                {...squareProps}
                style={{
                  width: dimensions.squareWidth,
                  height: dimensions.squareHeight,
                  margin: squareMargin,
                  borderRadius: borderRadius,
                  ...squareProps?.style,
                }}
                className={cn(
                  'group relative flex items-center justify-center',
                  "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-950 before:opacity-100 before:transition-all before:duration-1000 before:rounded-[var(--border-radius)]",
                  "after:content-[''] after:absolute after:inset-[var(--square-margin)] after:bg-neutral-950 after:rounded-[calc(var(--border-radius)-var(--square-margin))]",
                  "hover:before:bg-neutral-800 hover:before:opacity-100 hover:before:duration-0 hover:after:bg-neutral-900 hover:after:opacity-100 hover:after:duration-0",
                  squareProps?.className,
                )}
              >
                <span className="relative z-10 text-neutral-500 group-hover:text-white transition-colors duration-200 font-semibold select-none" style={{ fontSize: dimensions.squareWidth * 0.4 }}>
                  {letter}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export { RoundedSquareBackground, type RoundedSquareBackgroundProps };
