

const shorter = (title)=> {
    const splited = title.split(' ');
    const newTitle = `${splited[0]} ${splited[1]} ${splited[2]}`
    return newTitle
}


const isInCart = (state,id)=>{
    const result = !!state.selectedItems.find((item)=> item.id ===id)
    return result
}

const quantityCount = (state,id)=>{
    const index = state.selectedItems.findIndex(item=>item.id === id)
    if (index === -1){
        return false
    }
    else {
        return state.selectedItems[index].quantity
    }
}
export {shorter,isInCart,quantityCount}