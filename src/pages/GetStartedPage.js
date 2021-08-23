/* Importing Libraries */
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

/* Importing custom components */
import SecNav from "../components/navs/SecNav"
import Stepper from "../components/wizard/Stepper"
import AccountForm from "../components/forms/signup/AccountForm"
import ChooseRole from "../components/forms/signup/ChooseRole"
import SocialsForm from "../components/forms/signup/SocialsForm"
import PersonalInfo from "../components/forms/signup/PersonalInfo"
import AcceptTerms from "../components/forms/signup/AcceptTerms"

/* Importing custom action */
import { signup } from "../actions/userActions"
import AddressForm from "../components/forms/signup/AddressForm"
import { BASE_URL } from "../constants/baseURL"
import { jsonHeader } from "../helpers/config"
import axios from "axios"

/* Renders the signup page in the application */
const GetStartedPage = () => {
    /* State variables using useState hook to track the user information */
    // Form Step
    const [formStep, setFormStep] = useState(0)
    // User Role Selection
    const [selectUser, setSelectUser] = useState(true)
    // Organization Role Selection
    const [selectOrg, setSelectOrg] = useState(false)
    // stores the file
    const [selectFile, setSelectFile] = useState(null)
    const [identityFile, setIdentityFile] = useState(null)
    // terms accept or not state
    const [acceptTerms, setAcceptTerms] = useState(false)
    // stores the signup button clicked state
    const [btnClicked, setBtnClicked] = useState(false)

    const [provinceName, setProvinceName] = useState("")
    const [districtName, setDistrictName] = useState("")
    const [districts, setDistricts] = useState("")
    const [municipalities, setMunicipalities] = useState("")

    const [skillsList, setSkillsList] = useState()
    const [selectedSkillsList, setSelectedSkillsList] = useState([])

    const dispatch = useDispatch()
    const history = useHistory()

    // Destructuring the useForm hook into various gunctions, state
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues,
        setError,
        trigger,
    } = useForm()

    const loadSkills = useCallback(async () => {
        const loadSkillsUrl = BASE_URL + "/api/skills/"
        const config = jsonHeader()

        const { data } = await axios.get(loadSkillsUrl, config)

        setSkillsList(data)
        console.log(data)
    })

    const handleUserRoleClick = () => {
        setSelectOrg(!selectOrg)
        setSelectUser(!selectUser)
    }

    // user create action states denoting variables are selected from the redux store using the useSelector hook
    const { loading, error, createdUserInfo, userCreated } =
        useSelector((state) => state.userCreate)

    useEffect(() => {
        // if the user is created user is sent to login page
        if (createdUserInfo && userCreated) {
            history.push(`/login`)
        }

        loadSkills()
        // handles the notification toast creation on the basis of the user create action states
        const toastsId = {}
        if (btnClicked) {
            if (loading) {
                toast.remove(toastsId.error)
                const loadingToastId = toast.loading(
                    "Please wait while we create your account. . ."
                )
                toastsId.loading = loadingToastId
            } else if (error) {
                toast.remove(toastsId.loading)
                const errorToastId = toast.error(`Oops, ${error}`)
                toastsId.error = errorToastId
            } else if (userCreated) {
                toast.remove(toastsId.loading)
                const successToastId = toast.success(
                    "User Created Successfully!"
                )
                toastsId.success = successToastId
            }
        }
    }, [
        dispatch,
        history,
        createdUserInfo,
        userCreated,
        loading,
        error,
        btnClicked,
        selectedSkillsList,
    ])

    const handleOrgRoleClick = () => {
        setSelectOrg(!selectOrg)
        setSelectUser(!selectUser)
    }

    const handleButtonClick = () => {
        setFormStep(formStep + 1)
    }

    const handleButtonClickBack = () => {
        if (formStep > 0) {
            setFormStep(formStep - 1)
        }
    }

    const submitForm = () => {
        setBtnClicked(true)
        const gender = getValues("gender")
            ? getValues("gender")
            : "Male"

        const data = new FormData()
        data.append("password", getValues("password"))
        data.append("email", getValues("email"))
        data.append("full_name", getValues("full_name"))
        data.append("last_login", "")
        data.append("address", getValues("address"))
        data.append("phone", getValues("phone"))
        data.append("facebook", getValues("facebook"))
        data.append("instagram", getValues("instagram"))
        data.append("twitter", getValues("twitter"))
        data.append("website", getValues("website"))
        data.append("description", getValues("description"))
        data.append("volunteer", selectUser ? "True" : "False")
        data.append("organization", selectOrg ? "True" : "False")
        data.append("admin", "False")
        data.append("username", getValues("username"))
        data.append("image", selectFile)
        data.append("gender", gender)
        data.append("active", "False")
        data.append("staff", "False")
        data.append("identity", identityFile)
        data.append("verify", "False")
        data.append("reject", "False")
        data.append("province", getValues("province"))
        data.append("district", getValues("district"))
        data.append("municipality", getValues("municipality"))
        data.append("ward", getValues("ward"))
        data.append("skills", selectedSkillsList.slice(0, 3))
        data.append("address", getValues("address"))
        data.append("age", selectOrg ? 0 : getValues("age"))

        dispatch(signup(data))
    }

    // Render buttons based on the form step
    const renderButton = () => {
        if (formStep === 5) {
            return (
                <div className="flex justify-center items-center mt-12 space-x-8">
                    <button
                        disabled={acceptTerms}
                        onClick={() => handleButtonClickBack()}
                        className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
                    >
                        Back
                    </button>
                    <button
                        disabled={!acceptTerms}
                        onClick={() => submitForm()}
                        className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Submit Form
                    </button>
                </div>
            )
        } else if (formStep >= 1 && formStep <= 4) {
            return (
                <div className="flex flex-row justify-center items-center mt-12 space-x-8">
                    <button
                        onClick={() => handleButtonClickBack()}
                        className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
                    >
                        Back
                    </button>
                    <button
                        // disabled={!isValid}
                        onClick={() => handleButtonClick()}
                        className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            )
        } else if (formStep === 0) {
            return (
                <div className="flex flex-row justify-center items-center mt-12 space-x-8">
                    {/* <button
                        onClick={() => handleButtonClickBack()}
                        className=" text-purple-500 text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-100"
                    >
                        Back
                    </button> */}
                    <button
                        onClick={() => handleButtonClick()}
                        className="bg-purple-500 text-white text-lg rounded-lg px-8 py-2 focus:outline-none hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="bg-white">
            <div className="min-h-screen py-4 mx-auto lg:max-w-screen-xl">
                <SecNav />
                <div className="flex flex-col justify-center items-center mt-12">
                    <h1 className="text-4xl font-semibold">
                        Welcome to Givers
                    </h1>
                    <p className="text-lg text-gray-400 mt-2">
                        Please fill the form below to get started.
                    </p>
                </div>
                <div className="mt-4">
                    <Stepper formStep={formStep} />
                </div>

                {formStep === 0 && (
                    <section>
                        <ChooseRole
                            selectUser={selectUser}
                            selectOrg={selectOrg}
                            handleUserRoleClick={handleUserRoleClick}
                            handleOrgRoleClick={handleOrgRoleClick}
                        />
                    </section>
                )}
                {formStep === 1 && (
                    <section>
                        <AccountForm
                            register={register}
                            errors={errors}
                            isValid={isValid}
                            handleSubmit={handleSubmit}
                            getValues={getValues}
                            trigger={trigger}
                            setError={setError}
                        />
                    </section>
                )}
                {formStep === 2 && (
                    <section>
                        <PersonalInfo
                            selectOrg={selectOrg}
                            register={register}
                            errors={errors}
                            isValid={isValid}
                            handleSubmit={handleSubmit}
                            getValues={getValues}
                            trigger={trigger}
                            setIdentityFile={setIdentityFile}
                        />
                    </section>
                )}
                {formStep === 3 && (
                    <section>
                        <AddressForm
                            register={register}
                            errors={errors}
                            getValues={getValues}
                            trigger={trigger}
                            provinceName={provinceName}
                            setProvinceName={setProvinceName}
                            districtName={districtName}
                            setDistrictName={setDistrictName}
                            districts={districts}
                            setDistricts={setDistricts}
                            municipalities={municipalities}
                            setMunicipalities={setMunicipalities}
                        />
                    </section>
                )}
                {formStep === 4 && (
                    <section>
                        <SocialsForm
                            selectUser={selectUser}
                            selectOrg={selectOrg}
                            setSelectFile={setSelectFile}
                            register={register}
                            errors={errors}
                            isValid={isValid}
                            handleSubmit={handleSubmit}
                            getValues={getValues}
                            setError={setError}
                            trigger={trigger}
                            skillsList={skillsList}
                            setSkillsList={setSkillsList}
                            selectedSkillsList={selectedSkillsList}
                            setSelectedSkillsList={
                                setSelectedSkillsList
                            }
                        />
                    </section>
                )}
                {formStep === 5 && (
                    <section>
                        <AcceptTerms
                            acceptTerms={acceptTerms}
                            setAcceptTerms={setAcceptTerms}
                        />
                    </section>
                )}
                {renderButton()}
            </div>
        </div>
    )
}

export default GetStartedPage
