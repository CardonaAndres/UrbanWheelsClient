import React from 'react';
import photo from "../../assets/img/Team/fotoEquipo.jpg";
import { Twitter, Facebook, LinkedIn } from '@mui/icons-material';

const Team = () => {
    const teamMembers = [
        { name: 'Andrés Cardona', designation: 'Designation 1', img: photo },
        { name: 'Dylan Andrés', designation: 'Designation 2', img: photo },
        { name: 'Darley Sebastian', designation: 'Designation 3', img: photo },
    ];

    return (
        <div className="container mx-auto pt-10 pb-8">
            <div className="text-5xl text-red-600 text-center mb-6 pt-4 pb-10">Nuestro Equipo</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg w-full overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img className="w-full h-64 sm:h-80 object-cover" src={member.img} alt={member.name} />
                        <div className="p-6 text-center">
                            <h4 className="text-xl font-bold text-red-600 mb-2">{member.name}</h4>
                            <p className="text-gray-600 mb-4">{member.designation}</p>
                            <div className="flex justify-center space-x-4">
                                <a className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"  href="#" aria-label="Twitter" >
                                                                                                                              
                                    <Twitter />
                                </a>
                                
                                 <a className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"  href="#" aria-label="Twitter" >
                                                                                                                              
                                    <Facebook />
                                </a>
                                 <a className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"  href="#" aria-label="Twitter" >
                                                                                                                              
                                    <LinkedIn />
                                </a>
                     
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
