# react_rails_quiz

## Getting Started

Clone repo
```
git clone git@github.com:JardineMiller/react_rails_quiz.git
```

Enter directory
```
cd react_rails_quiz
```

Enter API directory and install dependencies
```
cd quiz_api && bundle install
```

Seed the database
```
rails db:migrate && rails db:seed
```

For testing:
```
rails test
```

Start rails server
```
rails s -p 3001
```

Open up a new terminal tab (cmd + t) and enter react directory and install dependencies
```
cd ../quiz_react && npm install
```

Start react local server
```
npm start
```

Browse to http://locahost:3000
