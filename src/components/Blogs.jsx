import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
	const navigate = useNavigate();
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const url = "/api/v1/blogs/index";
		fetch(url).then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		}).then((response) => setBlogs(response)).catch(() => navigate("/"));
	}, []);

	const allBlogs = blogs.map((blog, index) => (
		<div key={index} className="col-md-6 col-lg-4">
			<div className="card mb-4">
				<img src={blog.image} className="card-img-top" alt={`${blog.name} image`}/>
				<div className="card-body">
					<h5 className="card-title">{blog.name}</h5>
					<Link to={`/blog/${blog.id}`} className="btn custom-button">
						View Post
					</Link>
				</div>
			</div>
		</div>
	));
	const noBlog = (
		<div className="vw-100 vh-50 dflex align-items-center justify-content-center">
			<h4> Nothing Yet! </h4>
		</div>
	);

	return (
		<>
		<section className="jumbotron jumbotron-fluid text-center">
			<div className="container py-5">
				<h1 className="display-4">Welcome to my Blog</h1>
				<p className="lead text-muted">
					Yup, this is my blog and stuff. Enjoy it :)
				</p>
			</div>
		</section>
		<div className="py-5">
			<main className="container">
				<div className="text-end mb-3">
					<Link to="/blog" className="btn custom-button">
						Write New Blog
					</Link>
				</div>
				<div className="row">
					{blogs.length > 0 ? allBlogs : noBlog}
				</div>
				<Link to="/" className="btn btn-link">
					Home
				</Link>
			</main>
		</div>
		</>
	);
};

export default Blogs;
