export enum RequestMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete',
  Options = 'options',
}

export interface IRouteDefinition {
  path: string;
  requestMethod: RequestMethod;
  methodName: string | symbol;
}

export interface IControllerAction {
  method: RequestMethod;
  path: string;
}
