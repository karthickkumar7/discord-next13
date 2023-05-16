import { IconType } from 'react-icons';

type Props = {
    // children : ReactNode,
    className?: string;
    Icon: IconType;
};

const SidebarIcon = ({ className, Icon }: Props) => {
    return (
        <div
            className={`group relative px-3 py-2 w-[50px] h-[50px] flex items-center justify-center text-3xl text-white active:translate-y-[1px] cursor-pointer rounded-2xl bg-burple`}
        >
            <div className="absolute -left-4 w-2 h-8 rounded bg-white hidden group-hover:inline-block"></div>
            {/* {children} */}
            <Icon />
        </div>
    );
};

export default SidebarIcon;
