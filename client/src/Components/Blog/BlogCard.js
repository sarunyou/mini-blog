import React from "react";
import { Icon } from "rsuite";
import PropTypes from "prop-types";
import faker from "faker";

function BlogCard(props) {
    const { name, createdAt, content, status, category } = props;
    return (
        <div className="bg-white flex flex-col p-8 rounded-md w-full md:w-72 h-72">
            <div className="flex-1">
                <div className="flex justify-between">
                    <p className="font-bold text-purple-600">
                        {category} {status}
                    </p>
                    <Icon icon="circle-o" />
                </div>
                <p className="line-clamp-4 text-lg">{content}</p>
            </div>
            <div className="flex items-center p-2">
                <Icon icon="heart" className="mr-2" />
                <span className="font-bold">{faker.random.number(100)}</span>
                <div className="mx-2">|</div>
                <p>
                    <span className="font-bold">
                        {faker.random.number(100)}
                    </span>{" "}
                    Comments
                </p>
            </div>
            <div className="flex">
                <img src="https://i.pravatar.cc/50" className="rounded-3xl" />
                <div className="flex flex-col pl-4">
                    <div className="font-bold">{name}</div>
                    <div>{createdAt}</div>
                </div>
            </div>
        </div>
    );
}
BlogCard.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
    status: PropTypes.number,
};
export default BlogCard;
