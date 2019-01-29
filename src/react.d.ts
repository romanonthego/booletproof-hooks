import * as React from 'react';

declare module 'react' {
  function useState<T>(initialState: T | (() => T)): [T, (newState: T) => void];
  function useEffect(create: () => void | (() => void), inputs?: ReadonlyArray<unknown>): void;
  function useContext<T>(foo: React.Context<T>): T;
  function useReducer<S, A>(reducer: (state: S, action: A) => S, initialState: S): [S, (action: A) => void];
  function useCallback<F>(callback: F, inputs?: ReadonlyArray<unknown>): F;
  function useMemo<T>(create: () => T, inputs?: ReadonlyArray<unknown>): T;
  function useRef<T extends unknown>(initialValue?: T): React.RefObject<T>;
  function useImperativeMethods<T>(ref: React.Ref<T>, createInstance: () => T, inputs?: ReadonlyArray<unknown>): void;

  const useMutationEffect: typeof useEffect;

  const useLayoutEffect: typeof useEffect;

  function memo<P extends object>(
    Component: SFC<P>,
    propsAreEqual?: (
      prevProps: Readonly<P & { children?: ReactNode }>,
      nextProps: Readonly<P & { children?: ReactNode }>,
    ) => boolean,
  ): ExoticComponent<P>;
}
