import { FlipWords } from '../../utils/flip-words';

export function FlipWordsDemo() {
    const words = ['responsive', 'dynamic', 'user-friendly', 'secure', 'scalable'];

    return (
        <div className="h-auto  flex-col justify-center items-center px-4">
            <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-10 mb-4">
                SKILLS,
            </div>
            <div className="text-3xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-8xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <div>
                    I build
                </div>
                <div>
                    <FlipWords words={words} /> <br />
                </div>
                <div className="text-3xl sm:text-6xl md:text-3xl lg:text-4xl xl:text-8xl mt-2">
                    full stack applications
                </div>
            </div>
        </div>
    );
}

export default FlipWordsDemo;
