import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class UsersService{ 
  async getUserById(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log(res.data)  
  } 

  async getUserPosts(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    logger.log(res.data.posts)
    AppState.userPosts = [...res.data.posts]
    
  }
 
  async editUser(edditedUser) {
    const res = api.put('api/profiles/' + edditedUser.id)
    logger.log(res.data)
  }
 
}

export const usersService = new UsersService()