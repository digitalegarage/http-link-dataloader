export type Variables = { [key: string]: any }

export interface Options {
  method?: RequestInit['method']
  headers?: { [key: string]: string }
  mode?: RequestInit['mode']
  credentials?: RequestInit['credentials']
  cache?: RequestInit['cache']
  redirect?: RequestInit['redirect']
  referrer?: RequestInit['referrer']
  referrerPolicy?: RequestInit['referrerPolicy']
  integrity?: RequestInit['integrity']
  keepalive?: boolean
}

export type HttpOptions = Options & {
  uri: string
  maxBatchSize?: number
}

export interface GraphQLError {
  message: string
  locations?: { line: number; column: number }[]
  path?: string[]
}

export interface GraphQLResponse {
  data?: any
  errors?: GraphQLError[]
  status: number
  [key: string]: any
}

export interface GraphQLRequestContext {
  query: string
  variables?: Variables
}

export interface ClientOptions {
  cacheResults?: boolean
  maxBatchSize?: number
}
