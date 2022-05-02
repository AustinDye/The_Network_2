import { AppState } from "../AppState"
import { api } from "./AxiosService"

class LikesService {
 
 async likePost(post) {
  const res = await api.post('api/posts/' + post.id + "/like")
  const index = AppState.posts.findIndex(p => p.id == post.id)
  AppState.posts[index] = res.data
  console.log(res.data);
  }
}

export const likesService = new LikesService()