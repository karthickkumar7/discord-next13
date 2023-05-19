import { IconType } from 'react-icons';

type Props = {
    Icon: IconType;
};

const SidebarIcon = ({ Icon }: Props) => {
    return (
        <div
            className={`group relative md:px-3 md:py-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center text-xl md:text-3xl text-white active:translate-y-[1px] cursor-pointer rounded-2xl bg-burple`}
        >
            <div className="absolute -left-3 md:-left-4 w-2 h-8 rounded bg-white hidden group-hover:inline-block"></div>
            <Icon className="" />
        </div>
    );
};

export default SidebarIcon;
