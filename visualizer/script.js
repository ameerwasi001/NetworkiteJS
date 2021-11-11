const graph = initializeGraph();

const a1 = graph.addNode(null, null, new Tags().override(fromObject({"name":"Hamid","age":30,"favColors":[[0,128,0],[165,42,42],"Yellow"],"__relation_id":1,"text":{"text":"Hamid"},"x":575,"y":111})));
const a2 = graph.addNode(null, null, new Tags().override(fromObject({"name":"Laura","age":12,"favColors":[[255,255,255],"Silver"],"__relation_id":3,"text":{"text":"Laura"},"x":486,"y":310,"immediateFriend":"Laura"})));
const a3 = graph.addNode(null, null, new Tags().override(fromObject({"name":"Victoria","age":41,"favColors":[[128,0,128],[0,157,196]],"__relation_id":4,"text":{"text":"Victoria"},"x":826,"y":396,"immediateFriend":"Victoria"})));
const a4 = graph.addNode(null, null, new Tags().override(fromObject({"name":"John","age":35,"favColors":[[255,165,0],[255,192,203],"Violet","Taupe"],"__relation_id":2,"text":{"text":"John"},"x":454,"y":156})));


graph.addEdge(a1, a2);
graph.addEdge(a1, a3);
graph.addEdge(a2, a3);
graph.addEdge(a3, a2);
graph.addEdge(a3, a4);
