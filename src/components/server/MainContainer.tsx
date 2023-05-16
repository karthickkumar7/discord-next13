import React from 'react';
import DisplayModal from '../client/DisplayModal';

const MainContainer = () => {
    return (
        <section className="w-[87%] h-full flex justify-center items-center overflow-y-auto">
            <h1 className="text-xl text-white">Connect with friends</h1>
            <DisplayModal />
        </section>
    );
};

export default MainContainer;
