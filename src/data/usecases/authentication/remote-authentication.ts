import { HttpPostClient } from './protocols/http/http-post-client'

export class RemoteAuthentication {
    private readonly xssss: string = ''
    constructor (
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient) {}

    async auth (): Promise<void> {
        await this.httpPostClient.post(this.url)
    }
}
