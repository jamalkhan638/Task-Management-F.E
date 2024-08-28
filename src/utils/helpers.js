
export const dropdownvaluesUsers = (data) =>{
    let m = []
    data.forEach((item)=>{
        item.value = item._id
        item.label = item.name
        m.push(item)
    })
    return m

}

