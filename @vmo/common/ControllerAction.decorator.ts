import { IRouteDefinition, IControllerAction } from './Route.definition';

export const ControllerAction = ({
  method,
  path,
}: IControllerAction): MethodDecorator => {
  return (target, propertyKey) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes: IRouteDefinition[] = Reflect.getMetadata(
      'routes',
      target.constructor,
    );
    routes.push({
      requestMethod: method,
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};
