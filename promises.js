const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      const error = false;
      if (error) {
        reject(new Error("error in login"));
      }
  
      console.log("User logged");
      resolve({ email });
    });
  };
  
  const getUserVideos = (email) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log(getUserVideos)
        resolve(['video1', 'video2', 'video3']);
      }, 1000);
    })
  }
  
  const getVideosDetails = (video) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log(getUserVideos)
        resolve({ title: 'titulo do vídeo ' + video });
      }, 2500);
    })
  }
  
  loginUser("email@gmal.com", "123456")
    .then((user) => getUserVideos(user.email))
    .then((videos) => getVideosDetails(videos[0]))
    .then((getVideosDetails) => console.log({ getVideosDetails }))
    .catch((error) => console.log({ error }));
  
  
  const yt = new Promise((resolve) => {
    setTimeout(() => {
      resolve('videos do Youtube');
    })
  });
  
  const fb = new Promise((resolve) => {
    setTimeout(() => {
      resolve('videos do facebook');
    }, 3000)
  });
  
  
  Promise.all([yt, fb]).then((response) => { console.log(response) });