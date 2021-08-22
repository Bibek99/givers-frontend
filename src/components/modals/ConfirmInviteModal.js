import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { ReactComponent as Spinner } from "../../assets/spinner.svg"
import PropTypes from "prop-types"
import { useState } from "react"

const ConfirmInviteModal = ({
    isOpen,
    setOpen,
    loading,
    inviteUser,
    userId,
}) => {
    const [description, setDescription] = useState("")
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                onClose={() => setOpen(false)}
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
                                Invite User to volunteer
                            </Dialog.Title>

                            <Dialog.Description className="flex flex-col space-y-6">
                                <div>
                                    Before inviting the user, please
                                    enter some context as description
                                    below:
                                </div>
                                <div>
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        type="text"
                                        className="border-2 border-gray-200 mt-2 px-6 py-2 w-full bg-gray-50 rounded-lg focus:outline-none h-24"
                                        placeholder="Enter a description"
                                        onChange={(e) => {
                                            setDescription(
                                                e.target.value
                                            )
                                        }}
                                    />
                                </div>
                            </Dialog.Description>

                            <div className="flex flex-row space-x-4">
                                <button
                                    disabled={!description}
                                    onClick={() => {
                                        inviteUser(
                                            userId,
                                            description
                                        )
                                    }}
                                    className="flex flex-row items-center bg-purple-500 text-white px-4 py-2 text-lg focus:outline-none rounded-lg"
                                >
                                    <Spinner
                                        className={`${
                                            loading
                                                ? "animate-spin"
                                                : "hidden"
                                        }`}
                                    />
                                    <span
                                        className={`${
                                            loading ? "ml-3" : ""
                                        }`}
                                    >
                                        Invite
                                    </span>
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
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
    )
}

export default ConfirmInviteModal

ConfirmInviteModal.propTypes = {
    isOpen: PropTypes.bool,
    setOpen: PropTypes.func,
    loading: PropTypes.bool,
    inviteUser: PropTypes.func,
    userId: PropTypes.any,
}
