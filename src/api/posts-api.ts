import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const postsAPI = {
    getAllPosts() {
        return instance.get<any>('posts');

    },
    getPostComment(id:any) {
        return instance.get<any>(`posts/${id}?_embed=comments`);
    },
    createPost(post:any){
        return instance.post<any>(`posts`, post);

    },
    createComment(comment:any){
        return instance.post<any>(`comments`, comment);
    },
    deletePost(id:any){
        return instance.delete<any>(`posts/${id}`);
    },
    updatePost(id:any, value:any){
        return instance.put<any>(`posts/${id}`, value);
    }
}