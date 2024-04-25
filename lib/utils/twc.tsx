import * as React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { AbstractCompose, Config, Twc } from "./twc-types";

export { clsx as cx };

// SOURCE: https://github.com/gregberge/twc

function filterProps(
  props: Record<string, any>,
  shouldForwardProp: (prop: string) => boolean
) {
  const filteredProps: Record<string, any> = {};
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    if (shouldForwardProp(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
}

type Attributes = Record<string, any> | ((props: any) => Record<string, any>);

//
export const createTwc = <TCompose extends AbstractCompose = typeof clsx>(
  config: Config<TCompose> = {}
) => {
  const compose = config.compose || clsx;
  const defaultShouldForwardProp =
    config.shouldForwardProp || ((prop) => prop[0] !== "$");
  const wrap = (Component: React.ElementType) => {
    const createTemplate = (
      attrs?: Attributes,
      shouldForwardProp = defaultShouldForwardProp
    ) => {
      const template = (
        stringsOrFn: TemplateStringsArray | Function,
        ...values: any[]
      ) => {
        const isClassFn = typeof stringsOrFn === "function";
        const tplClassName =
          !isClassFn && String.raw({ raw: stringsOrFn }, ...values);

        /* eslint-disable react/display-name */
        return React.forwardRef((p: any, ref) => {
          const { className: classNameProp, asChild, ...rest } = p;
          const rp =
            typeof attrs === "function" ? attrs(p) : attrs ? attrs : {};
          const fp = filterProps({ ...rp, ...rest }, shouldForwardProp);
          const Comp = asChild ? Slot : Component;
          const resClassName = isClassFn ? stringsOrFn(p) : tplClassName;
          return (
            <Comp
              ref={ref}
              className={
                typeof resClassName === "function"
                  ? (renderProps: any) =>
                      compose(
                        resClassName(renderProps),
                        typeof classNameProp === "function"
                          ? classNameProp(renderProps)
                          : classNameProp
                      )
                  : compose(resClassName, classNameProp)
              }
              {...fp}
            />
          );
        });
      };
      /* eslint-enable react/display-name */

      template.transientProps = (
        fnOrArray: string[] | ((prop: string) => boolean)
      ) => {
        const shouldForwardProp =
          typeof fnOrArray === "function"
            ? (prop: string) => !fnOrArray(prop)
            : (prop: string) => !fnOrArray.includes(prop);
        return createTemplate(attrs, shouldForwardProp);
      };

      if (attrs === undefined) {
        template.attrs = (attrs: Attributes) => {
          return createTemplate(attrs);
        };
      }

      return template;
    };

    return createTemplate();
  };

  return new Proxy(
    (component: React.ComponentType) => {
      return wrap(component);
    },
    {
      get(_, name) {
        return wrap(name as keyof JSX.IntrinsicElements);
      },
    }
  ) as any as Twc<TCompose>;
};

//
export const twc = createTwc();
