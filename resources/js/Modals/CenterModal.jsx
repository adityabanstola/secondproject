import React, { useContext, useEffect, useState } from "react"
import { ModalContext } from "../ModalContext";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";

const CenterModal = ({ type, data }) => {
    const customStyles = {
        minWidth: '120px', // Set the desired minimum width
    };
    const { modalStatus, modalType, modalContent, changeModalStatus, modalData, setModalData, modalRow, setModalRow } = useContext(ModalContext);
    const toggleModalStatus = () => {
        changeModalStatus(!modalStatus)
    }
    useEffect(() => {
    }, [])

    return (
        <>

            <ReactModal
                closeTimeoutMS={400}
                isOpen={modalStatus && modalType == "center"}
                onRequestClose={toggleModalStatus}
                ariaHideApp={false}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    content: {
                        width: '100%',
                        padding: '0px',
                        maxWidth: '400px',
                        borderRadius: '8px',
                        position: 'static',
                        transform: 'none',
                    },
                }}
                className="
                bg-white
                absolute inset-8 inset-x-0 md:inset-x-96 overflow-auto
            outline-none border border-solid border-teal-500 md:min-w-96 z-20 shadow-2xl "
            >
                <div className="bg-gray-200 w-full h-full z-20">
                    <div className='flex bg-teal-500 '>
                        <div className='flex-grow'>
                            <div className="flex justify-center p-1">
                                <div className="text-white text-2xl">
                                    {modalData.title ? modalData.title : "Center Div"}
                                </div>
                            </div>
                        </div>
                        <div className='text-lg flex justify-center items-center mr-2 text-white' onClick={toggleModalStatus}>
                            <div className=" cursor-pointer  p-0 hover:text-red-500">
                                <FontAwesomeIcon icon={faClose} className="h-6 w-6 " />
                            </div>
                        </div>
                    </div>
                    {modalContent}
                </div>
            </ReactModal >
        </>
    );
}

export default CenterModal;

