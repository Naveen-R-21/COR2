declare namespace Cypress {
    interface Chainable<Subject> {
      xpath<E extends Node = HTMLElement>(
        expression: string,
        options?: Partial<Loggable & Timeoutable & Withinable>
      ): Chainable<JQuery<E>>;
    }
  }
  