import instance from ".";

export function getPets() {
  return instance.get("/pets");
}
export function addNew(newPet) {
  return instance.post("/pets" + newPet);
}
// export function getById(id) {
//   return instance.get("/pets/" + id);
// }
export async function getById(id) {
  const response = await instance.get("/pets/");
  return response?.data;
}
export function updateById() {
  return instance.put({ name: "", image: "", type: "", adopted: "" });
}
export function deletePet(id) {
  return instance.delete("/pets/" + id);
}
