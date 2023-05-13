import MainContainer from '@/components/server/MainContainer';
import SideDashBar from '@/components/server/SideDashBar';
import SideUserBar from '@/components/server/SideUserBar';

const page = () => {
    return (
        <div className="w-full h-screen flex overflow-hidden bg-Gray">
            <SideDashBar />
            <SideUserBar />
            <MainContainer />
        </div>
    );
};

export default page;
