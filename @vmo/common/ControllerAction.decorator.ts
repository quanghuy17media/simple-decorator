import { IRouteDefinition, IControllerAction } from './Route.definition';

export const VmoControllerAction = ({
  method,
  path,
}: IControllerAction): MethodDecorator => {
  return (target, propertyKey) => {
    if (!Reflect.hasMetadata('vRoutes', target.constructor)) {
      Reflect.defineMetadata('vRoutes', [], target.constructor);
    }
    const routes: IRouteDefinition[] = Reflect.getMetadata(
      'vRoutes',
      target.constructor,
    );
    routes.push({
      requestMethod: method,
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('vRoutes', routes, target.constructor);
  };
};
