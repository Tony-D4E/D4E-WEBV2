import * as React from 'react';

type ResponsiveImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'sizes'
> & {
  src: string;
  widths?: number[];
  sizes?: string;
  pictureClassName?: string;
  pictureStyle?: React.CSSProperties;
};

function stripExtension(p: string) {
  return p.replace(/\.(png|jpe?g|webp|avif)$/i, '');
}

function buildSrcSet(base: string, widths: number[], ext: string) {
  return widths.map((w) => `${base}-w${w}${ext} ${w}w`).join(', ');
}

export function ResponsiveImage({
  src,
  alt,
  widths = [160, 320, 640, 1024],
  sizes,
  pictureClassName,
  pictureStyle,
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}: ResponsiveImageProps) {
  const base = stripExtension(src);

  const avifSrcSet = buildSrcSet(base, widths, '.avif');
  const webpSrcSet = buildSrcSet(base, widths, '.webp');
  const jpgSrcSet = buildSrcSet(base, widths, '.jpg');

  // Fallback: use a mid-size jpg variant if present; the browser will pick via srcset anyway.
  const fallback = `${base}-w${widths[Math.min(1, widths.length - 1)]}.jpg`;

  return (
    <picture className={pictureClassName} style={pictureStyle}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        {...imgProps}
        src={fallback}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding={decoding}
      />
    </picture>
  );
}

