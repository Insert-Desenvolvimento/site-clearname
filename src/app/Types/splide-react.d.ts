declare module '@splidejs/react-splide' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  type Options = {
    type?: 'slide' | 'loop' | 'fade';
    perPage?: number;
    perMove?: number;
    gap?: string | number;
    arrows?: boolean;
    pagination?: boolean;
    autoplay?: boolean;
    interval?: number;
    pauseOnHover?: boolean;
    rewind?: boolean;
    breakpoints?: {
      [key: string]: Options;
    };
    [key: string]: string | number | boolean | undefined | Options | {
      [key: string]: Options;
    };
  };

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    tag?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<{ className?: string; style?: CSSProperties; children?: ReactNode }>;
}
