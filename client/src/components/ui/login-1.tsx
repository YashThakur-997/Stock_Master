import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface InputProps {
    label?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    [key: string]: any;
}

const AppInput = (props: InputProps) => {
    const { label, placeholder, icon, ...rest } = props;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div className="w-full min-w-[200px] relative">
            {label &&
                <label className='block mb-2 text-sm'>{label}</label>
            }
            <div className="relative w-full">
                <input
                    type="text"
                    className="peer relative z-10 border-2 border-[var(--color-border)] h-13 w-full rounded-md bg-[var(--color-surface)] px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-[var(--color-bg)] placeholder:font-medium"
                    placeholder={placeholder}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    {...rest}
                />
                {isHovering && (
                    <>
                        <div
                            className="absolute pointer-events-none top-0 left-0 right-0 h-[2px] z-20 rounded-t-md overflow-hidden"
                            style={{
                                background: `radial-gradient(30px circle at ${mousePosition.x}px 0px, var(--color-text-primary) 0%, transparent 70%)`,
                            }}
                        />
                        <div
                            className="absolute pointer-events-none bottom-0 left-0 right-0 h-[2px] z-20 rounded-b-md overflow-hidden"
                            style={{
                                background: `radial-gradient(30px circle at ${mousePosition.x}px 2px, var(--color-text-primary) 0%, transparent 70%)`,
                            }}
                        />
                    </>
                )}
                {icon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}

const Login1 = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login();
        navigate('/');
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const leftSection = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - leftSection.left,
            y: e.clientY - leftSection.top
        });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const socialIcons = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                </svg>
            ),
            href: '#',
            gradient: 'bg-[var(--color-bg)]',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                </svg>
            ),
            href: '#',
            bg: 'bg-[var(--color-bg)]',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z" />
                </svg>
            ),
            href: '#',
            bg: 'bg-[var(--color-bg)]',
        }
    ];

    return (
        <div className="min-h-screen w-full bg-[var(--color-bg)] flex items-center justify-center p-4">
            <div className='card w-[80%] md:w-[55%] lg:w-[45%] flex flex-col justify-center items-center py-10 relative'>

                <div
                    className='w-full px-6 lg:px-16 relative overflow-hidden'
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className={`absolute pointer-events-none w-[1000px] h-[1000px] bg-gradient-to-r 
                            from-purple-300/30 via-blue-300/30 to-pink-300/30 rounded-full blur-3xl 
                            transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    />

                    <form className='flex flex-col justify-center gap-6 text-center w-full relative z-10 rounded-2xl' onSubmit={handleLogin}>
                        <h1 className='text-3xl md:text-4xl font-extrabold'>Login</h1>
                        <div className="flex items-center justify-center">
                            <ul className="flex gap-3 md:gap-4">
                                {socialIcons.map((social, index) => (
                                    <li key={index}>
                                        <a
                                            href={social.href}
                                            className="w-[2.5rem] md:w-[3rem] h-[2.5rem] md:h-[3rem] 
                                                bg-[var(--color-bg-2)] rounded-full flex justify-center items-center 
                                                overflow-hidden border-3 border-[var(--color-text-primary)] group relative"
                                        >
                                            <div
                                                className={`absolute inset-0 w-full h-full ${social.gradient || social.bg}
                                                    scale-y-0 origin-bottom transition-transform duration-500 
                                                    group-hover:scale-y-100`}
                                            />
                                            <span className="text-[1.5rem] text-[hsl(203,92%,8%)] z-[2] transition-all 
                                                duration-500 group-hover:text-[var(--color-text-primary)] group-hover:rotate-y-360">
                                                {social.icon}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <span className='text-sm text-muted-foreground'>or use your account</span>

                        <div className='space-y-4 w-full'>
                            <AppInput placeholder="loginID" type="text" />
                            <AppInput placeholder="Password" type="password" />
                        </div>

                        <a href="#" className='text-sm font-light hover:underline'>Forgot your password?</a>

                        <button
                            className="group/button relative inline-flex justify-center items-center overflow-hidden 
                                rounded-md bg-[var(--color-border)] px-8 py-2 text-sm font-normal text-white 
                                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-text-primary)]"
                        >
                            <span className="relative z-10">Login</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center 
                                [transform:skew(-13deg)_translateX(-100%)] 
                                group-hover/button:[transform:skew(-13deg)_translateX(100%)] 
                                duration-1000">
                                <div className="relative h-full w-8 bg-white/20" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login1;
