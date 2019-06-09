import axios from 'axios'
var Chance = require('chance')
var chance = new Chance()
import token from './token'
const endpoint = `http://localhost:3000/api/challenge/add`
describe('/api/challenge/add', () => {
  test('title', async () => {
    const TOKEN = await token()

    const request = await axios.post(
      endpoint, {
        title: '',
        categories: [],
        startDate: '',
        finishDate: '',
        Goal: 0,
        description: ''
      }, {
        headers: {
          authorization: `Bearer ${TOKEN}`
        }
      }
    )
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'title',
      msg: 'title cannot be empty'
    })
  })
  test('categories', async () => {
    const TOKEN = await token()

    const request = await axios.post(
      endpoint, {
        title: 'Title',
        categories: [],
        startDate: '',
        finishDate: '',
        Goal: 0,
        description: ''
      }, {
        headers: {
          authorization: `Bearer ${TOKEN}`
        }
      }
    )
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'categories',
      msg: 'at least one category is needed.'
    })
  })
  test('startDate', async () => {
    const TOKEN = await token()

    const request = await axios.post(
      endpoint, {
        title: 'Title',
        categories: [1],
        startDate: '',
        finishDate: '',
        Goal: 0,
        description: ''
      }, {
        headers: {
          authorization: `Bearer ${TOKEN}`
        }
      }
    )
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'startDate',
      msg: 'startDate is not valid.'
    })
  })
  test('finishDate', async () => {
    const TOKEN = await token()

    const request = await axios.post(
      endpoint, {
        title: 'Title',
        categories: [1],
        startDate: '2019-12-01',
        finishDate: '',
        Goal: 0,
        description: ''
      }, {
        headers: {
          authorization: `Bearer ${TOKEN}`
        }
      }
    )
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'finishDate',
      msg: 'finishDate must be in valid interval.'
    })
  })
})
