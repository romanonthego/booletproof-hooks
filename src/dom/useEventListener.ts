import { useEffect } from 'react';

/** __hook, set event listener on node__
 *
 * set's up event listener on given node, resets if if handler, event name or node is changed
 *
 */
export const useEventListener = (
  DOMnode: HTMLElement | Document | Window,
  eventName: string,
  handler: (event: Event) => void,
): void => {
  useEffect(
    () => {
      DOMnode.addEventListener(eventName, handler);
      return () => DOMnode.removeEventListener(eventName, handler);
    },
    [handler, DOMnode, eventName],
  );
};
