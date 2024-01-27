import ApiRequest from "../Configs/Config";

export const PostTicket= (NewTicket) =>{
  return  ApiRequest.post("ticket",NewTicket)
}
export const GetTicket= () =>{
  return  ApiRequest.get('/api/ticket/all')
}
export const PutTicket= (UpdateTicket,TicketId) =>{
  return  ApiRequest.put(`/api/ticket/update/${TicketId}`,UpdateTicket)
}
export const DeleteTicket= (TicketId) =>{
  return  ApiRequest.delete(`/api/ticket/delete/${TicketId}`)
}