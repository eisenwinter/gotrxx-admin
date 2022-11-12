import dayjs from "dayjs"

export const format = (node, formatFunction) => {
    function updateValue(e) {
        node.value = formatFunction(node.value)
    }
    
    node.addEventListener('input', updateValue)
    node.addEventListener('paste', updateValue)

    // Format on intial hydration
    node.value = formatFunction(node.value)
    
    return {
        destroy() {
                node.removeEventListener('input', updateValue)
                node.removeEventListener('paste', updateValue)
        }
    }
    
}

export const noValue = value => {
    if(!value){
        return "-"
    }
    return value
}

export	const dateTime = value => {
   if(!value){
       return "-"
   }
   const dt = dayjs(value)
   return dt.format('YYYY-MM-DD HH:mm')
}

export	const date = value => {
    const dt = dayjs(value)
    return dt.format('YYYY-MM-DD')
 }