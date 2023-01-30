//export class UserInfo {
 //   constructor({selectorName, selectorJob}) {
 //     this._userName = document.querySelector(selectorName);
 //     this._userJob = document.querySelector(selectorJob);
 //     console.log(selectorJob)
 //   }
//      getUserInfo() {
//  const userInfo = {
 //   name: this._userName.textContent,
 //   Job: this._userJob.textContent,
 // }
 // return userInfo;
  //    }
  
   //   setUserInfo(name, job) {
   //     this._userName.textContent = name,
   //     this._userJob.textContent = job,
  //     console.log(name)
  //      console.log(job)
  //      console.log(_userJob)
  //    }
   // }
   export class UserInfo {
    constructor({selectorName, selectorProf}) {
      this._userName = document.querySelector(selectorName);
      this._userProf = document.querySelector(selectorProf);
    console.log(this._userName)
    }
      getUserInfo() {
  const userInfo = {
    name: this._userName.textContent,
    prof: this._userProf.textContent,
  }
  console.log(userInfo)
  return userInfo;
      }
  
      setUserInfo(name, prof) {
        this._userName.textContent = name,
        this._userProf.textContent = prof
        console.log(this._userName)
      }
    }