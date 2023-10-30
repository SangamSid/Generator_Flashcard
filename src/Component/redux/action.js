export const createFlashcard=(formData)=>{
    return {
        type:"CREATE_FLASHCARD",
        payload:formData
    }
};

export const deleteFlashCard=(id)=>{
    return {
        type:"DELETE_FLASHCARD",
        payload:id
    }
}