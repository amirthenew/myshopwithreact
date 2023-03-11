

const shorter = (title)=> {
    const splited = title.split(' ');
    const newTitle = `${splited[0]} ${splited[1]} ${splited[2]}`
    return newTitle
}


const isInCart = (state,id)=>{
    const result = state.selectedItems.find((item)=> item.id ===id)
}
export {shorter}