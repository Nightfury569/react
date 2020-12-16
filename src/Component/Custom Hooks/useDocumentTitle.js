import {useEffect} from 'react'

export default function useDocumentTitle(count) {
    return (
        useEffect(()=>{
            document.title = `You Clicked ${count} times`      // We are changing the title name of the App, and the title will be changed depending upon count
            console.log("Clicked")
        },[count])
    )
}

//React Hook Tutorial [video no.31] of Codevolution React Tutorial [Custom Hooks]