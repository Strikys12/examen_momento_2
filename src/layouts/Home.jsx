import { Hero } from '../components/Hero';
import { Feature } from '../components/Feature';
export const Home = () => {
    return (
        <div className="animate-fadeIn">
            <Hero />
            <Feature />
        </div>
    );
};