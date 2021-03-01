export const copyToClipboard = str => {

    // an object to access the OS clipboard
    const clipboard = window.navigator.clipboard

    //if no clipboard or no function detected
    if (!clipboard || typeof clipboard.writeText !== `function`) {
      
        //create a texterea object, assign props to text area
        const textarea = document.createElement(`textarea`)
        textarea.value = str

        // set atttrbutes to the text area
        textarea.setAttribute(`readonly`, true)
        textarea.setAttribute(`contenteditable`, true)
        textarea.style.position = `absolute`
        textarea.style.left = `-9999px`

        // add text erea to the child
        document.body.appendChild(textarea)

        textarea.select()

        // ?
        const range = document.createRange()
        const sel = window.getSelection()

        sel.removeAllRanges()
        sel.addRange(range)
        textarea.setSelectionRange(0, textarea.value.length)
        document.execCommand(`copy`)
        
        // clean up?
        document.body.removeChild(textarea)
        

        return Promise.resolve(true)
    }
  
    return clipboard.writeText(str)
  }