import React, {useState } from "react";
import { Icon, Modal, Button } from "rsuite";
import { formatDistance } from "date-fns";
import PropTypes from "prop-types";
import faker from "faker";
import { statues } from './constants'
import useAuth from "../../hooks/useAuth.hook";

function BlogCard(props) {
    const { onEdit = () => {}, data, onDelete = () => {} } = props
    const {user} = useAuth()
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false)
    const isOwnerBlog = user.id === data.author.id;
    const { updatedAt, content, status, category } = data
    const statusInfo = statues.find(_status => _status.value === status) || {}

    const handleCloseConfirmDelete = () => {
        setIsOpenConfirmDelete(false)
    }
    return (
        <div className="group bg-white hover:shadow-md flex flex-col p-8 rounded-md w-full md:min-w-72 h-72">
            <div className="flex-1">
                <div className="flex justify-between">
                    <p className="font-bold text-purple-600">
                        {category} {status}
                    </p>
                    <div>
                    
                        {
                            isOwnerBlog &&
                            <Icon 
                                onClick={() => onEdit(props.data)}
                                icon="edit" 
                                className="opacity-0 group-hover:opacity-100 cursor-pointer mr-4"
                                />
                        }
                        <Icon 
                            icon="circle-o" 
                            className={`text-${statusInfo.color}-500`} />
                    </div>
                </div>
                <p className="line-clamp-4 text-lg">{content}</p>
            </div>
            <div className="flex items-center p-2">
                <Icon icon="heart" className="mr-2" />
                <span className="font-bold">{faker.datatype.number(100)}</span>
                <div className="mx-2">|</div>
                <p>
                    <span className="font-bold">
                        {faker.datatype.number(100)}
                    </span>{" "}
                    Comments
                </p>
            </div>
            <div className="flex">
                <img src={`https://i.pravatar.cc/50?img=${(data.author.id % 70) + 1}`} className="rounded-3xl" />
                <div className="flex flex-col pl-4">
                    <div className="font-bold">{data.author.username}</div>
                    <div>{formatDistance(
                                        new Date(updatedAt),
                                        new Date(),
                                        {
                                            addSuffix: true,
                                        }
                                    )}</div>
                </div>
                {
                    isOwnerBlog &&
                    <div className="flex items-end ml-auto">
                        <Icon 
                            onClick={() => setIsOpenConfirmDelete(true)}
                            icon="trash-o" 
                            className="text-red-600 opacity-0 group-hover:opacity-100 cursor-pointer mr-4"
                            />
                    </div>
                }
            </div>
            <Modal backdrop="static" show={isOpenConfirmDelete} onHide={handleCloseConfirmDelete} size="xs">
                <Modal.Body>
                    Are you sure want to delete this blog ?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={async () => {
                        await onDelete(props.data)
                        handleCloseConfirmDelete()
                    }} appearance="primary">
                    Delete
                    </Button>
                    <Button onClick={handleCloseConfirmDelete} appearance="subtle">
                    Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
BlogCard.propTypes = {
    data:PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};
export default BlogCard;
