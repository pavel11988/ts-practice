//type
type Id = number | string;
const userId: Id = '12sdads23';
const postId: Id = 123132;

//union
type Status = "pending" | "success" | "error";
const status: Status = "success";

console.log("03-types:",userId, postId, status);

export {};
