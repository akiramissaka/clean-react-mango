import { HttpPostClient } from './protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

console.log('dassdasdssss')

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient with correct URL', async () => {
        class HttpPostClientSpy implements HttpPostClient {
            url?: string
            async post (url: string): Promise<void> {
                this.url = url
            }
        }
        const httpPostClientSpy = new HttpPostClientSpy()
        const url = 'any_url'
        const sut = new RemoteAuthentication(url, httpPostClientSpy)
        await sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})
