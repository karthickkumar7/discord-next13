import SideDashBar from '@/components/server/SideDashBar';
import SideUserBar from '@/components/server/SideUserBar';

const page = () => {
    return (
        <div className="w-full h-screen flex overflow-y-auto bg-slate-600">
            <SideDashBar />
            <SideUserBar />
            <section className="w-[83%] h-full"></section>
        </div>
    );
};

export default page;
