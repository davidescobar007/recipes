/* eslint-disable unused-imports/no-unused-vars */
import { ServiceApiCall } from "./types"

export class RequestBuilder {
  private method: string = "GET"
  private url: string = ""
  private headers: Record<string, string> = {}
  private body: any = null

  setMethod(method: string): RequestBuilder {
    this.method = method
    return this
  }

  setUrl(url: string): RequestBuilder {
    this.url = url
    return this
  }

  setHeader(name: string, value: string): RequestBuilder {
    this.headers[name] = value
    return this
  }

  setBody(body: any): RequestBuilder {
    this.body = body
    return this
  }

  build(): Request {
    return new Request(this.method, this.url, this.headers, this.body)
  }
}

class Request {
  constructor(
    public method: string,
    public url: string,
    public headers: Record<string, string>,
    public body: any
  ) {}
}

function serviceApiCall({ method, url, body }: ServiceApiCall): Promise<any> {
  const response = fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 1500)
  })
}

export const errorMessages: { [key: number]: string } = {
  304: "Not Modified",
  404: "Not Found - The specified URL was not found or couldn't be retrieved",
  409: "The provided ETag token does not match the input data",
  422: "Unprocessable Entity - Couldn't parse the recipe or extract the nutritional info",
  555: "Recipe with insufficient quality to process correctly"
}

export default serviceApiCall
