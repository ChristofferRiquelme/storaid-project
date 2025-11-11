import React, { use } from 'react'
import { useState } from 'react'

function BlogDescriptionToggle({ description }) {
    if (!description) return null;

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const shortDescription = description.slice(0, 120).trim();

  return (
    <div>
        <p>{isExpanded ? description : shortDescription + "..."}</p>
        <button onClick={toggleDescription} className="blog-and-news-card-button">
            {isExpanded ? "Show less ←" : "Read more →"}
        </button>
    </div>
  )
}

export default BlogDescriptionToggle