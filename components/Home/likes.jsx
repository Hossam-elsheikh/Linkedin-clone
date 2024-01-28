import Container from "@/app/ui/Container";
import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from "@/context/ModalContext";
import { Avatar } from "@mui/material";
import like from "../../public/like.svg";
// import love from "../../public/love.svg";
import support from "../../public/support.svg";
import insightful from "../../public/idea.svg";
import inquire from "../../public/inquire.svg";
import clap from "../../public/clap.svg";
import Image from "next/image";
import likeCircle from "../../public/like-circle.svg";
import ClearIcon from "@mui/icons-material/Clear";
import useGetLikes from "../useHooks/useGetLikes";
import { useSelector } from "react-redux";

function Likes() {

    const selectedPostId = useSelector((state) => state.post.selectedPostId);
    const likes = useGetLikes(selectedPostId)
    console.log(likes);

    const [selectedSection, setSelectedSection] = useState('All');
    const [reactionCounts, setReactionCounts] = useState({});


    const handleSectionSelect = (section) => {
        setSelectedSection(section);
    };

    const { setModal } = useContext(ModalContext);

    const reactions = [
        { src: like, alt: 'like' },
        { src: clap, alt: 'clap' },
        { src: support, alt: 'support' },
        // { src: love, alt: 'love' },
        { src: insightful, alt: 'insightful' },
        { src: inquire, alt: 'inquire' },
    ]
    const ReactionDiv = (reaction, postId) => {
        return (
            <Image
                width='45'
                src={reaction.src}
                alt={reaction.alt}
                key={reaction.alt}
                className="py-2 px-2"
            />
        )
    }
    const getReactionImage = (reaction) => {
        switch (reaction) {
            case 'like':
                return like;
            case 'clap':
                return clap;
            case 'support':
                return support;
            case 'love':
                // return love;
            case 'insightful':
                return insightful;
            case 'inquire':
                return inquire;
            default:
                return '';
        }
    };

    useEffect(() => {
        const counts = {};
        likes.forEach((reactionInfo) => {
            const reactionType = reactionInfo.reaction
            counts[reactionType] = (counts[reactionType] || 0) + 1
        })
        setReactionCounts(counts);
    }, [likes])

    return (
        <Container >
            <div className="flex flex-col pt-6 pl-6 min-w-[600px] min-h-[550px] max-h-[550px] ">

                <div className="border-b">

                    <div className="flex justify-between">

                        <div>
                            <p className="text-2xl font-bold pb-2">Reactions</p>
                        </div>

                        <div className="pr-6">
                            <ClearIcon className="hover:bg-gray-200 rounded-full text-gray-500 cursor-pointer"
                                onClick={() => setModal(false)}

                            />
                        </div>

                    </div>
                    <div
                        className="flex text-xl border-gray-300 hover:bg-gray-200 cursor-pointer items-center">
                        <p
                            className={`hover:bg-gray-200 cursor-pointer 
                                    ${selectedSection === 'All' ? 'text-green-600 border-b-4 border-green-600' : ''}`}
                            onClick={() => handleSectionSelect('All')}
                        >
                            All
                            {likes.length}
                        </p>
                        
                        {reactions.map((reaction) => (
                            reactionCounts[reaction.alt] > 0 && (
                            <p
                                key={reaction.alt}
                                className={`hover:bg-gray-200 cursor-pointer 
                                ${selectedSection === reaction.alt ? 'text-green-600 border-b-4 border-green-600' : ''}`}
                                onClick={() => handleSectionSelect(reaction.alt)}
                            >
                                {ReactionDiv(reaction)}
                            </p>
                            )
                        ))}

                    </div>
                </div>

                <div className="overflow-y-auto">

                    <div className="flex-col ">

                        {likes.map((reactionInfo) => (
                            <div className="flex items-center border-b cursor-pointer" key={reactionInfo._id}>
                                <div className="relative">
                                    <Avatar className="font-3xl m-2"
                                        src={reactionInfo.userId?.profilePicture}
                                        sx=
                                        {{
                                            width: '60px',
                                            height: '60px'
                                        }}
                                    />
                                    <Image
                                        width="17"
                                        height="17"
                                        src={getReactionImage(reactionInfo.reaction)}
                                        alt="love"
                                        className=" -ml-1 absolute bottom-2 right-2"
                                    />
                                </div>

                                <div>
                                    <div className="font-bold text-md">
                                        {reactionInfo.userId?.name}
                                    </div>
                                    <div className='text-gray-500 text-sm'>
                                        {reactionInfo.userId?.jobTitle}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Likes