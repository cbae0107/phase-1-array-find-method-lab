function superbowlWin(record){
    const found = record.find(object=>object.result==="W");
    if (record.find(object=>object.result==="W")){
        return found.year
    } else return
}
  // if (found===undefined){
    //     return undefined
    // } else {
    //     return found.year
    // }
