import { ReactNode } from 'react';

export namespace I {
  export interface Child {
    readonly children: ReactNode;
  }

  export interface Navigation {
    name: string;
    id: string;
    link?: string;
  }

  export interface Navigate {
    navigate(data: Readonly<I.Navigation>): void;
  }

  export interface Image {
    readonly src: string;
    readonly alt: string;
  }
}
