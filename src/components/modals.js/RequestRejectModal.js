import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

const RequestApproveModal = ({ isOpen, closeModal, decline }) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                onClose={() => closeModal()}
                className="fixed z-20 inset-0 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="z-40 bg-white rounded-lg max-w-md mx-auto p-6 flex flex-col space-y-6">
                            <Dialog.Title className="text-lg font-medium">
                                Reject Volunteer Request
                            </Dialog.Title>

                            <Dialog.Description>
                                Before rejecting this request make sure you have
                                assessed the volunteers eligibilty and other
                                requirements.
                            </Dialog.Description>

                            <div className="flex flex-row space-x-4">
                                <button
                                    onClick={() => decline(false)}
                                    className="bg-purple-500 text-white px-4 py-2 text-lg focus:outline-none rounded-lg"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={() => closeModal()}
                                    className="border border-red-500 text-red-500 px-4 py-2 focus:outline-none rounded-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default RequestApproveModal;
