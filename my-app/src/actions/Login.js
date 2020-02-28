const log = console.log;


export const addUser = user => {
  const users = user.state.users
  const _user = {
    name: user.state.username,
    password: user.state.password
  };

  users.map(u => {
    if (_user.name !== u.name) {
      users.push(_user);
    } else {
      log("username: " + u.name + " has been taken!")
    }
  })

  user.setState({
    users: users
  });
  // console.log(users)
};

export const verifyUser = user => {
  const username = user.state.username
  const password = user.state.password
  const userlist = user.state.users

  userlist.map(u => {
    if (u.name === username) {
      if (u.password === password) {
        console.log("Log in successfully!")
        // console.log(u)
        user.state.currentUser = []
        user.state.currentUser.push(u)
        user.setState({
          currentUser: user.state.currentUser,
          signin: false
        })
        
        // console.log(user.state.currentUser)
      } else {
        console.log("Wrong password!")
      }
    }
  })
}

export const hideForm = user => {
  
}
