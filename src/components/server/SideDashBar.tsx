import SidebarIcon from '@/components/client/ui/SidebarIcon';
import { MdGroups2, MdOutlineAdd } from 'react-icons/md';

const SideDashBar = () => {
    return (
        <section className="w-[15%] md:w-[3%] h-full px-2 py-4 bg-blackishGray flex flex-col items-center space-y-4">
            <SidebarIcon Icon={MdGroups2} />
            <SidebarIcon Icon={MdOutlineAdd} />
        </section>
    );
};

export default SideDashBar;
