AppSettingsPage({
  build(props) {
    return Section({}, [
      Section(
        {},
        TextInput({
          label: 'HoCom URL',
          placeholder: 'https://hocom.site',
          settingsKey: 'hocomURL',
                  bold: true,
                  subStyle: {
                    color: '#333',
                    fontSize: '14px',
                  },
                  maxLength: 200,
                  onChange: (val) => {
                    if (val.length < 12) {
                      console.log("Is seems URL is too short...")
                    }
                  },
        })
      ),
      Section(
        {},
        TextInput({
          label: 'Auth key',
          placeholder: '<<See at HoCom site>>',
          settingsKey: 'hocomAuth'
        })
      ),

      Section(
        {},
        TextInput({
          label: 'Lamp host',
          placeholder: 'lamp1',
          settingsKey: 'hocomLamp'
        })
      ),
    ])
  }
})
