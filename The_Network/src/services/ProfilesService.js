import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService{ 
  async getProfileById(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.profile = res.data;
    console.log('hello from the ', res.data);
    logger.log(res.data)  
  } 

  async getProfilePosts(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    logger.log(res.data.posts)
    AppState.userPosts = [...res.data.posts]

  }
 
  async editProfile(editedProfile) {
    const res = api.put('api/profiles/' + editedProfile.id)
    logger.log(res.data)
  }
 
}

export const profilesService = new ProfilesService()