

const shorter = (title)=> {
    const splited = title.split(' ');
    const newTitle = `${splited[0]} ${splited[1]}`;
    return newTitle
}

export {shorter}