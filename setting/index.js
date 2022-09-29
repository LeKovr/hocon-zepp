AppSettingsPage({
  build(props) {
    return View(
      {
        style: {
          padding: '12px 20px',
        },
      },[
      View(
          {
            style: {
              borderBottom: '1px solid #eaeaea',
              padding: '6px 0',
              marginBottom: '6px',
            },
          },
          [
            TextInput({
              label: 'HoCon URL',
              placeholder: 'https://hocon.site',
              settingsKey: 'hoconURL',
              bold: true,
              subStyle: {
                bold: false,
                fontSize: '14px',
                marginBottom: '6px',
              },
              maxLength: 200,
            }),
          ]
      ),
      View(
        {
          style: {
            borderBottom: '1px solid #eaeaea',
            padding: '6px 0',
            marginBottom: '6px',
          },
        },
        [
            TextInput({
              label: 'Lamp host',
              placeholder: 'lamp1',
              settingsKey: 'hoconLamp',
              bold: true,
              subStyle: {
                bold: false,
                fontSize: '14px',
                marginBottom: '6px',
              },
              maxLength: 200,
            }),
          ]
          ),
          View(
            {
              style: {
                borderBottom: '1px solid #eaeaea',
                padding: '6px 0',
                marginBottom: '6px',
              },
            },
            [
            TextInput({
              label: 'Auth key',
              placeholder: '<<See at HoCon site>>',
              settingsKey: 'hoconAuth',
              bold: true,
              subStyle: {
                bold: false,
                fontSize: '14px',
                marginBottom: '6px',
                color: '#eaeaea',
              },
            }),
            ],
          ),
          View(
            {
              style: {
                borderBottom: '1px solid #eaeaea',
                padding: '6px 0',
                marginBottom: '6px',
              },
            },
            [
            Section({
              description: 'This app works only with companion linux service HoCon, see https://github.com/LeKovr/hocon',
              style: {
                color: 'black',
                fontSize: '12px',
                marginBottom: '6px',
              },
            }),
            ],
          ),
      ]
    )
  }
})
