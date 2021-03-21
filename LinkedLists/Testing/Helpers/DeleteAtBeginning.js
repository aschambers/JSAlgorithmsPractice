module.exports = deleteAtBeginning = (list) => {
  if (size(list) < 1) return null;
  
  return list.next;
}
