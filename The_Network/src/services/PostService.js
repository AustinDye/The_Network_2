import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
  async getAllPosts() {
    const res = await api.get('api/posts')
    logger.log(res.data.posts)
    AppState.posts = [...res.data.posts]
    
  }
  async createPost(formData) {
    const res = await api.post('api/posts/', formData)
    this.getAllPosts()
    return res.data
  }
  async deletePost(id) {
    const res = await api.delete('api/posts/' + id)
    logger.log('success')
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}

export const postService = new PostService()