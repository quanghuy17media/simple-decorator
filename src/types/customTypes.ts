import { Request } from 'express';
import { RequestParams } from '@elastic/elasticsearch';

export interface IIndexSomeDataReq extends Request {
  body: RequestParams.Index;
}

export interface ISearchReq extends Request {
  body: RequestParams.Search;
}
