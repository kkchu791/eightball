# Eightball
React frontend consuming Rails JSON API

#### URL: https://eight-ball123.firebaseapp.com/

### To install:

```
git clone https://github.com/kkchu791/eightball.git
npm install
```

### Run API
```
git clone https://github.com/kkchu791/responseAPI.git
bundle install
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
rails s -p 3001
```

In the rails console of the ResponseAPI repos, create a new API Key

`ApiKey.create!`

Plug in your newly generated Api Key into src/js/components/eightBall.js

```
  getResponse(){
    let config = {
      headers: {'Authorization': 'Token token="<ADD_API_KEY_HERE>'}
    }

    axios.get("http://localhost:3001/responses", config)
      .then((response) => {
        console.log(response.data['data']);
        this.setState({ response: response.data['data']})
       }
    )
  }
```

Finally run the application with

`web-dev-server`