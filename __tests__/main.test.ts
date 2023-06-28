import nock from 'nock';
import axios from 'axios'

describe('greeter function', () => {


  // Assert if setTimeout was called properly
  it('delays the greeting by 2 seconds', async () => {

    nock('https://google.com').get('/hello').reply(201, { hello: "world" });

    const res = await axios.get('https://google.com/hello')
    const body = await res.data;

    console.log(body)

    expect(body).toEqual({ hello: 'world' })

  });


});
