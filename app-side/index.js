import { MessageBuilder } from '../shared/message'

const messageBuilder = new MessageBuilder()

const fetchData = async (ctx, mode) => {
  try {
    // Requesting network data using the fetch API

     const lamp = "?id="+ settings.settingsStorage.getItem('hoconLamp');
     const host = settings.settingsStorage.getItem('hoconURL');
     const auth = settings.settingsStorage.getItem('hoconAuth');

     const data = await fetch({
       url: host + '/api/lamp' + lamp + '&scene=' + mode,
       method: 'GET',
       headers: {
         'Authorization': auth
       },
    });
    ctx.response({
      // use with simulator
      // data: { result: JSON.parse(data.body) },
      data: { result: data.body },
    })
  } catch (error) {
      console.log('fetch error: ',error)
      ctx.response({
        data: { result: 'ERROR' },
      })
  }
}

AppSideService({
  onInit() {
    messageBuilder.listen(() => {})

    messageBuilder.on('request', (ctx) => {
      const jsonRpc = messageBuilder.buf2Json(ctx.request.payload)
      if (jsonRpc.method === 'GET_DATA') {
        return fetchData(ctx, jsonRpc.mode)
      }
    })
  },

  onRun() {
  },

  onDestroy() {
  }
})
