export const VmoController = (prefix: string): ClassDecorator => {
  return target => {
    Reflect.defineMetadata('vPrefix', prefix, target);
    if (!Reflect.hasMetadata('vRoutes', target)) {
      Reflect.defineMetadata('vRoutes', [], target);
    }
  };
};
