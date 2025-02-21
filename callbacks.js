const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
      const error = false;
      if(error){
        return onError(new Error('error in login'));
      }
  
      console.log("User logged");
      onSuccess({ email })
    }, 1500);
  };
  
  
  const getUserVideos = (email, callback) => {
    setTimeout(() => {
      callback(['video1', 'video2', 'video3']);
    }, 1000);
  }
  
  const getVideosDetails = (video, callback) => {
    setTimeout(() => {
      callback('titulo do vídeo ' + video);
    }, 2500);
  }
  
  const user  = loginUser('email@gmail.com', '123456', (user) => {
    console.log({user})
    getUserVideos(user.email, (videos) => {
      console.log({videos})
      getVideosDetails(videos[0], (title) => {
        console.log({ title })
      })
    })
  }, (error) => { console.log({ error })});
  
  console.log({user});