import React from "react"
function Tag({tagName, selectTag}) {
  return (
    <button type="button" className = "bg-pink-600 mr-4 px-4 py-2 rounded-md" onClick={()=>selectTag(tagName)}>
        {tagName}
    </button>
  )
}

export default Tag