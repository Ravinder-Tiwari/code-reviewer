import { useState } from 'react'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-javascript"

import Editor from 'react-simple-code-editor'
import axios from 'axios'

import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

import './App.css'

function App() {
  const [code, setCode] = useState(`function sum(){
  return 1 + 1
}`)
  const [review, setReview] = useState("")

  async function reviewCode() {
    console.log("clicked review");
    
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/get-review",
        { code }
      )


      setReview(response.data.result) 
    } catch (error) {
      console.error(error)
      setReview("Error fetching review.")
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 17,
              caretColor: "white",
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              backgroundColor: "#0e0e0e",
              color: "white"
            }}
          />
        </div>

        <div className="review" onClick={reviewCode}>
          Review
        </div>
      </div>

      {/* ✅ RIGHT PANEL = AI OUTPUT */}
      <div className="right">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]} >
          {review}
        </ReactMarkdown>
      </div>
    </main>
  )
}

export default App
