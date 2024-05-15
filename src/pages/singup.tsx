import React from 'react';
import logo from '../Images/logo.png'
import InputCom from '../components/inputCom';
import ButtonCom from '../components/buttonCom';
import CheckBoxCom from '../components/checkboxCom';

const SignIn: React.FC = () => {
    return (
        <div className='flex gap-x-36 gap-y-16 flex-col lg:flex-row items-center justify-center px-8 lg:pt-0 md:px-24 lg:px-48 pt-24 min-h-screen pb-5'>
            <div className='basis-3/5'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='basis-2/5 lg:bg-custom-gradient lg:py-6 lg:pr-7 lg:pl-8 w-full rounded-xl lg:shadow-lg block'>
                <div className='text-3xl lg:text-3xl text-center'>Sign Up</div>
                <div className='text-xs lg:text-sm mt-3 text-center'>Record and Share Your Creative Videos</div>
                <div className='mt-7 lg:mt-10 flex flex-col gap-y-3 lg:gap-y-3'>
                    <InputCom placeHolder="Email"/>
                    <InputCom placeHolder="Enter Your Password"/>
                </div>
                <div className='mt-4 lg:mt-5 text-base lg:text-1xl lg:text-nowrap flex'>
                    <CheckBoxCom text="Remember Me"/>
                    <div className='text-nowrap'>Forgot Password?</div>
                </div>
                <div className='mt-3'>
                    <ButtonCom bgColor='bg-donaut' text='Sign Up'/>
                </div>
                <div className='mt-2 flex items-center gap-3'>
                    <div className='border-2 w-full h-px mt-1'></div>
                    <div className='text-base lg:text-2xl'>or</div>
                    <div className='border-2 w-full h-px mt-1'></div>
                </div>
                <div className='mt-3 flex flex-col gap-y-3'>
                    <ButtonCom bgColor='bg-custom-gradient' text='Connect With Google' icon='google'/>
                    <ButtonCom bgColor='bg-custom-gradient' text='Connect With X' icon='twitter'/>
                </div>
                <div className='mt-3 text-center text-base lg:text-1xl '>
                    Don’t have an Account Yet? <span className='text-donaut'>Sign Up</span>
                </div>
            </div>
        </div>
    );
}

export default SignIn;