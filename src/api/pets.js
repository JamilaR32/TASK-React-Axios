import instance from ".";

export function getPets() {
  return instance.get("/pets");
}
export function addNew() {
  return instance.post({ name: "cat", image: "", type: "", adopted: "" });
}
export function updateById() {
  return instance.put({ name: "", image: "", type: "", adopted: "" });
}
