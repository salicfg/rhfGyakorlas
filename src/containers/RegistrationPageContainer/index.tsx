import {SubmitHandler, useForm} from "react-hook-form";
import {registrationDefaultValues, RegistrationFormValues} from "./types.ts";
import {GENDER_OPTIONS} from "../../common/constants.ts";

const RegistrationPageContainer = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<RegistrationFormValues>({
        defaultValues: registrationDefaultValues,
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<RegistrationFormValues> = (formValues) => {
        alert(JSON.stringify(formValues, null, 2))
    }

    const validateAccept = (value: boolean): boolean | string => {
        return value || 'Kerlek fogadd el a szerzodest!'
    }

    return (
        <div style={{width: 500, margin: '10px auto', padding: 10, borderRadius: 8, border: '2px solid blue'}}>
        <h2>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <input type="text" placeholder={'Firstname'} {...register('firstName', {required: 'Kotelezo!'})}/>
                {errors['firstName']?.message && <p>{errors['firstName']?.message}</p>}

                <input type="text" placeholder={'Lastname'} {...register('lastName', {required: 'Kotelezo!'})}/>
                {errors['lastName']?.message && <p>{errors['firstName']?.message}</p>}

                <input type="number" placeholder={'Age'} {...register('age', {min: {value: 18, message: 'Csak felnott lehet!'}})}/>
                {errors['age']?.message && <p>{errors['age']?.message}</p>}

                <select {...register('gender', {required: 'Kotelezo!'})}>
                    <option value={''}></option>
                    {GENDER_OPTIONS.map((option) =>
                        (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
                {errors['gender']?.message && <p>{errors['gender']?.message}</p>}

                <label htmlFor="accept">Please accept the terms</label>
                <input id={'accept'} type="checkbox" {...register('accept', {validate: validateAccept})}/>
                {errors['accept']?.message && <p>{errors['accept']?.message}</p>}

                <button type={'submit'}>Register</button>
            </form>
        </div>
    )
}

export default RegistrationPageContainer;