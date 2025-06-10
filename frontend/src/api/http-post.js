import http from "@/api/http";

class Post {
  response(data) {
    // console.log('api', data)
    return http.post("/response", data);
  }
}

export default new Post();