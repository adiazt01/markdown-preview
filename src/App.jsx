import { useState } from "react";
import "./App.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

function App() {

  const [input, setInput] = useState(`![Dwinatech Logo](https://www.nautiljon.com/images/jeuxvideo_persos/00/35/link_1353.webp)
  
# Hi, this is my MarkDown Preview App 
## Welcome!
### :)))
  
\`<div>Inline code</div>\`
  
\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
     }
 }
\`\`\`
  
**Some bold text**
  
[This is my freecodecamp user](https://www.freecodecamp.org/fccc117c7bb-b7ee-4660-8ae3-663357be41a0)

> Block Quot
  
1. First list item
2. Second list item
`)
  

  return (
    <div className="container">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputArea-input"
          id="editor"
          placeholder="Escribe tu cogido MarkDown aqui..."
        ></textarea>
      <div className="outputArea" id="preview">
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={input} remarkPlugins={[remarkGfm, remarkBreaks]} />
      </div>
    </div>
  );
}

export default App;
