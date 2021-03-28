import React, { useState } from "react";
import { formatDistance, subDays } from "date-fns";
import { Button } from "rsuite";
import BlogCard from "../components/Blog/BlogCard";
import BlogForm from "../components/Blog/BlogForm";
import SimpleNavbar from "../components/SimpleNavbar";
import useAuth from "../hooks/useAuth.hook";

function Home() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const auth = useAuth();
    console.log("auth", auth);
    const openBlogFormModal = () => {
        setIsOpenModal(true);
    };
    const closeBlogFormModal = () => {
        setIsOpenModal(false);
    };
    return (
        <div className="h-full flex flex-col">
            <SimpleNavbar user={auth.user} />
            <div className="flex bg-gray-100 justify-end py-4 pr-4 md:pr-16">
                <Button onClick={openBlogFormModal} appearance="primary">
                    Create Blog
                </Button>
            </div>
            <div className="p-4 pt-0 md:p-16 md:pt-0 bg-gray-100 flex justify-center h-full flex-1">
                <div className="container">
                    <BlogCard
                        onSubmit={(value) => {
                            console.log("submit", value);
                        }}
                        category="PHYSICS"
                        name="Author"
                        createdAt={formatDistance(
                            subDays(new Date(), 3),
                            new Date(),
                            {
                                addSuffix: true,
                            }
                        )}
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        status={1}
                    />
                </div>
            </div>
            <BlogForm isOpen={isOpenModal} onClose={closeBlogFormModal} />
        </div>
    );
}

export default Home;
