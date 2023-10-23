import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

function MarkdownEditor() {
    const [blog, setBlog] = useState(``);

    const [data, setData] = useState({
        title: '',
        date: '',
        excerpt: '',
        cover_image: '',
        tech: '',
    })

    const handleHeaderData = (title, date, excerpt, cover_image, tech) => {
        const headerData = `title: ${title}\ndate: ${date}\nexcerpt: ${excerpt}\ncover_image: ${cover_image}\ntech: ${tech}`

        return headerData
    }

    const combineData = (headerData, content) => {
        const componentData = '---\n' + headerData + '\n---\n' + content 
        return componentData
    }
  
    const handleSaveSubmit = async (e) => {
        e.preventDefault();
        const { title, date, excerpt, cover_image, tech } = data
        const headerData = handleHeaderData(title, date, excerpt, cover_image, tech)
        const componentData = combineData(headerData, blog)
        
        const response = await fetch('/api/v1/saveMarkdown', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: componentData }),
        });
      
        if (response.ok) {
          console.log('The markdown file has been saved');
        } else {
          console.error('Failed to save the markdown file');
        }
    };
      
      

  return (
    <div>
      <MdEditor
        value={blog}
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={({ text }) => setBlog(text)}
      />
      <div>
        <form onSubmit={handleSaveSubmit}>
            <input type="text" placeholder="Title" onChange={(e) => setData({...data, title: e.target.value})} />
            <input type="text" placeholder="Date" onChange={(e) => setData({...data, date: e.target.value})} />
            <input type="text" placeholder="Excerpt" onChange={(e) => setData({...data, excerpt: e.target.value})} />
            <input type="text" placeholder="Cover Image" onChange={(e) => setData({...data, cover_image: e.target.value})} />
            <input type="text" placeholder="Tech" onChange={(e) => setData({...data, tech: e.target.value})} />
            <input type="text" placeholder="Slug" onChange={(e) => setData({...data, slug: e.target.value})} />
            <button className='bg-white' type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default MarkdownEditor;
