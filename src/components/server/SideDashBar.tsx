import SidebarIcon from '@/components/client/SidebarIcon';
import { MdGroups2, MdOutlineAdd } from 'react-icons/md';

const SideDashBar = () => {
    return (
        <section className="w-[4%] h-full px-2 py-4 bg-slate-800 flex flex-col items-center space-y-4">
            <SidebarIcon>
                <MdGroups2 />
            </SidebarIcon>
            <SidebarIcon>
                <MdOutlineAdd />
            </SidebarIcon>
        </section>
    );
};

export default SideDashBar;
