import React, { useState } from "react";
import { mutate } from 'swr'
import { Button, Placeholder, Loader,
    Notification,
} from "rsuite";
import BlogCard from "../components/Blog/BlogCard";
import BlogForm from "../components/Blog/BlogForm";
import SimpleNavbar from "../components/SimpleNavbar";
import useAuth from "../hooks/useAuth.hook";
import useBlogs from "../hooks/useBlogs.hook";
import blogService from "../services/blog.service";
const { Paragraph } = Placeholder;
function Home() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState({})
    const { blogs, isLoading } = useBlogs();
    const auth = useAuth();
    const openBlogFormModal = () => {
        setIsOpenModal(true);
    };
    const closeBlogFormModal = () => {
        setEditingBlog({})
        setIsOpenModal(false);
    };

    const handleDelete = async (data) => {
        try {
            await blogService.delete(data.id)
            mutate("/blogs")
        } catch (error) {
            Notification.error({
                title: "Error",
                description: error.message
            });
        }
    }

    const handleSubmit = async (data) => {
        try {
            if (editingBlog.id) {
                await blogService.update(editingBlog.id, data)
            } else {
                await blogService.create(data)
            }
            mutate("/blogs")
            closeBlogFormModal()
        } catch (error) {
            Notification.error({
                title: "Error",
                description: error.message
            });
        }
    }
    return (
        <div className="h-full flex flex-col">
            <SimpleNavbar user={auth.user} />
            {
                auth.isLogin &&
                <div className="flex bg-gray-100 justify-end py-4 pr-4 md:pr-16">
                    <Button onClick={openBlogFormModal} appearance="primary">
                        Create Blog
                    </Button>
                </div>
            }
            {
                isLoading 
                && (<Paragraph rows={8}>
                    <Loader backdrop content="loading..." vertical />
                </Paragraph>) 
            }
            <div className="overflow-auto p-4 pt-0 md:p-16 md:pt-0 bg-gray-100 flex justify-center h-full flex-1">
                <div className="container grid-cols-1 sm:grid-cols-3 gap-4 grid">
                    {
                        blogs && (blogs.map((blog) => {
                            return (
                                <BlogCard
                                    onEdit={(data) => {
                                        setEditingBlog(data)
                                        setIsOpenModal(true)
                                    }}
                                    onDelete={handleDelete}
                                    key={blog.id}
                                    data={blog}
                                />
                            );
                        }))
                    }
                </div>
            </div>
            <BlogForm
                initialValues={editingBlog}
                onSubmit={handleSubmit}
                isOpen={isOpenModal} 
                onClose={closeBlogFormModal} />
        </div>
    );
}

export default Home;
