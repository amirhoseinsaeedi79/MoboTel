import ApiRequest from "../Configs/Config";

export const PostComment= (NewComment) =>{
  return  ApiRequest.post(`/api/comment`,NewComment)
}
export const GetComment= () =>{
  return  ApiRequest.get('/api/comment/all')
}
export const PutComment= (UpdateComment,CommentId) =>{
  return  ApiRequest.put(`/api/comment/update/${CommentId}`,UpdateComment)
}
export const DeleteComment= (CommentId) =>{
  return  ApiRequest.delete(`/api/comment/delete/${CommentId}`)
}