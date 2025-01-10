import { Typography, Button } from '@mui/material';
import { Visibility } from '@mui/icons-material';

export const UserCard = ({ user, onOpenModal }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
    <Typography variant="h6" className="text-lg font-semibold text-gray-800 mb-2">
      {user.name} - {user.user_ID}
    </Typography>
    <Typography className="text-gray-600">Email: <span className="text-red-500">{user.email}</span></Typography>
    <Typography className="text-gray-600">Tipo de documento: <span className="text-red-500">{user.type_doc}</span></Typography>
    <Typography className="text-gray-600">Documento: <span className="text-red-500">{user.number_doc}</span></Typography>
    <Typography className="text-gray-600">Edad: <span className="text-red-500">{user.age}</span></Typography>
    <Typography className="text-gray-600">Teléfono: <span className="text-red-500">{user.cellphone}</span></Typography>
    <Typography className="text-gray-600">Dirección: <span className="text-red-500">{user.address}</span></Typography>
    <div className="mt-4 flex justify-between">
      <Button variant="outlined" color="error" startIcon={<Visibility />} className="w-full" onClick={() => onOpenModal(user)}> Ver más </Button>
    </div>
  </div>
);

