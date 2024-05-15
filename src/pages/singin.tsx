import React from 'react';
import logo from '../Images/logo.png'
import InputCom from '../components/inputCom';
import ButtonCom from '../components/buttonCom';
import CheckBoxCom from '../components/checkboxCom';

const SignIn: React.FC = () => {
    return (
        <div className='flex gap-x-36 gap-y-16 flex-col lg:flex-row items-center px-8 lg:px-48 pt-24 lg:pt-0 min-h-screen pb-5 lg:pb-0'>
            <div className='flex-auto'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='flex-auto lg:bg-custom-gradient lg:py-6 lg:pr-7 lg:pl-8 w-full rounded-xl'>
                <div className='text-3xl lg:text-5xl text-center'>Sign In</div>
                <div className='text-xs lg:text-lg mt-5 text-center'>Record and Share Your Creative Videos</div>
                <div className='mt-7 lg:mt-10 flex flex-col gap-y-4 lg:gap-y-5'>
                    <InputCom placeHolder="Email"/>
                    <InputCom placeHolder="Enter Your Password"/>
                </div>
                <div className='mt-4 lg:mt-5 text-base lg:text-2xl lg:text-nowrap flex'>
                    <CheckBoxCom text="Remember Me"/>
                    <div>Forgot Password?</div>
                </div>
                <div className='mt-5'>
                    <ButtonCom bgColor='donaut' text='Sign In'/>
                </div>
                <div className='pt-4 flex items-center gap-3'>
                    <div className='border-2 w-full h-px mt-1'></div>
                    <div className='text-base lg:text-2xl'>or</div>
                    <div className='border-2 w-full h-px mt-1'></div>
                </div>
                <div className='mt-5 flex flex-col gap-y-5'>
                    <ButtonCom bgColor='custom-gradient' text='Connect With Google'/>
                    <ButtonCom bgColor='custom-gradient' text='Connect With X'/>
                </div>
                <div className='mt-6 text-center text-base lg:text-2xl '>
                    Don’t have an Account Yet? <span className='text-donaut'>Sign In</span>
                </div>
                <div className='mt-6 text-center text-base lg:text-2xl p-3 rounded-md lg:rounded-none'>
                    Sign up as Creator &#62;<span className='text-donaut'>Sign Up</span>
                </div>
            </div>
        </div>
    );
}

export default SignIn;