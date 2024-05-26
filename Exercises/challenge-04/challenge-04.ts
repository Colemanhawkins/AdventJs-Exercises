interface box {
    l: number,
    h: number,
    w: number
}

function fitsInOneBox(boxes: box[]) {
    const sorted = [...boxes].sort((a,b) => a.l - b.l)
   
     for(let index in sorted){
       let boxA = sorted[index];
       let boxB = sorted[Number(index) + 1]
   
     if(!boxA || !boxB) continue
   
     if(boxA.l >= boxB.l || boxA.w >= boxB.w || boxA.h >= boxB.h ) return false
     }
   
     return true
   }