import { Post } from "../@types";
import Service from "../Service";
import generateQueryString from "../utils/generateQueryString";


class PostService extends Service {

  
  static getAllPosts(search: Post.Query) {
    const queryString = generateQueryString(search)
    console.log('search: ',search)
    return this.Http
      .get<Post.Paginated>('/posts'.concat(queryString))
      .then(this.getData)
  }

  static getPostById(id: number) {
    return this.Http
      .get<Post.Detailed>(`/posts/${id}`)
      .then(this.getData)
  }

  static createPost(post: Post.Input) {
    return this.Http
      .post<Post.Detailed>('/posts', post)
      .then(this.getData)
  }
}

export default PostService