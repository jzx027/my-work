function Heap(){
    this.data=[];
    this.insert=insert;
    this.deleting=deleting;
}
function insert(val,key){
    this.data.push(val);
    let idx=this.data.length-1;
    let fatherIdx=Math.floor((idx-1)/2);
    while(fatherIdx>=0){
        if(this.data[fatherIdx][key]>this.data[idx][key]||((this.data[fatherIdx][key]===this.data[idx][key])&&(this.data[fatherIdx].key<this.data[idx].key))){
            let temp=this.data[idx];
            this.data[idx]=this.data[fatherIdx];
            this.data[fatherIdx]=temp;
        }
        idx=fatherIdx;
        fatherIdx=Math.floor((idx-1)/2);
    }
}
function deleting(key){
    let val=this.data[0];
    if(this.data.length===1){
        this.data.pop();
        return val;
    }
    this.data[0]=this.data.pop();
    let idx=0;
    while(idx<this.data.length){
        let left=idx*2+1;
        let right=idx*2+2;
        let select=left;
        if (right<this.data.length){
            // 寻找最小的
            if(this.data[left][key]>this.data[right][key]){
                select=right;
            }else if(this.data[left][key]===this.data[right][key]){
                select=this.data[left].key<this.data[right].key?right:left;
            }
        }
        if(select<this.data.length){
            if(this.data[select][key]<this.data[idx][key]||((this.data[select][key]===this.data[idx][key])&&(this.data[select].key>this.data[idx].key))) {
                let temp = this.data[idx];
                this.data[idx] = this.data[select];
                this.data[select] = temp;
            }
        }
        idx=select;
    }
    return val;
}
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k)=>{
    let obj={},temp=[],res=[];
    for(let i=0;i<words.length;i++){
        if(obj[words[i]]){
            obj[words[i]]+=1;
        }else{
            obj[words[i]]=1;
        }
    }
    for(let key of Object.keys(obj)){
        temp.push({key,'val':obj[key]});
    }
    let h=new Heap();
    for(let i=0;i<k;i++){
        h.insert(temp[i],'val');
    }
    for(let i=k;i<temp.length;i++){
        if(temp[i].val>h.data[0].val||((temp[i].val===h.data[0].val)&&temp[i].key<h.data[0].key)){
            h.deleting('val');
            h.insert(temp[i],'val');
        }
    }
    while(res.length<k){
        res.unshift(h.deleting('val').key);
    }
    return res;
};