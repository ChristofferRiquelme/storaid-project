import React from 'react'
import { useState, useEffect } from 'react'
import calendarIcon from '../assets/calendar-icon.svg'

function BlogAndNews() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    console.log(blogs);
  return (
    <section className='blog-and-news'>
        <div className="blog-and-news-inner">
            <div className="blog-and-news-subtitle">
                <h4>Latest Blog and News</h4>
            </div>
            <div className="blog-and-news-title-and-text">
                <div className="blog-and-news-title">
                    <h3>Check Out Our Latest Blog and News Update</h3>
                </div>
                <div className="blog-and-news-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
            </div>
            <div className="blog-and-news-cards">
                <div className="blog-and-news-card">
                    <div className="blog-and-news-card-image">
                        <img src={blogs[0]?.imageUrl} alt="Blog Image" />
                    </div>
                    <div className="blog-and-news-card-date">
                        <img src={calendarIcon} alt="Calendar Icon" />
                        <p>{new Date(blogs[0]?.created).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</p>
                    </div>
                    <div className="blog-and-news-card-title">
                        <h6>{blogs[0]?.title}</h6>
                    </div>
                    <div className="blog-and-news-card-description">
                        <p>{blogs[0]?.description}</p>
                    </div>
                    <div className="blog-and-news-card-toggle"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogAndNews