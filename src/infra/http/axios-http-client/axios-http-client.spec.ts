import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/test'
import axios from 'axios'
import { mockPostRequest } from '@/data/test'

jest.mock('axios')

type SutTypes = {
    sut: AxiosHttpClient
    mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
    const sut = new AxiosHttpClient()
    const mockedAxios = mockAxios()
    return {
        sut,
        mockedAxios
    }
}

describe('AxiosHttpClient', () => {
    test('Should call axios with correct values', async () => {
        const request = mockPostRequest()
        const { sut, mockedAxios } = makeSut()
        await sut.post(request)
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('Should return the correct statusCode and body', async () => {
        const { sut, mockedAxios } = makeSut()
        const promise = sut.post(mockPostRequest())
        // results[0] corresponde ao valor de mockResolvedValue. Já results[1] é o valor de mockRejectedValue
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
})
