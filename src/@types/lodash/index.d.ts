import * as lodash from 'lodash';

declare module 'lodash' {
  //export function chunk(collection: any, size?: number): any[][];

  interface LoDashStatic {
    /**
     * Wrapper around console.log. Sokopa
     *
     * @param item : The string to log to the console
     */
    log(item: string): void;
  }
}
