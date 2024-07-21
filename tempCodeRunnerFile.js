const mapData = [1,5,3,6,4,7,3];
const updatedmapData=mapData.map((elem,idx)=>{
    return elem+idx;
})
console.log(updatedmapData);