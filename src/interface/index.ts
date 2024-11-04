import { ReactNode } from 'react';

export namespace I {
  export interface Child {
    readonly children: ReactNode;
  }

  export interface Navigation {
    name: string;
    id: string;
    isLink: boolean;
  }

  export interface Navigate {
    navigate(data: Readonly<I.Navigation>): void;
  }
}
