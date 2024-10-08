import type {  AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios'

export interface CoverAxiosInstace extends Omit<AxiosInstance,'interceptors'> {
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>
        response: AxiosInterceptorManager<AxiosResponse>
    }
}
// index.ts
export interface RequestInterceptors {
    // 请求拦截
    requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorsCatch?: (err: any) => any
    // 响应拦截
    responseInterceptors?: <T = AxiosResponse>(config: T) => T
    responseInterceptorsCatch?: (err: any) => any
  }

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}

