import { Button, Typography, Grid, Divider } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Navbar } from "../../components/common/Navbar";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { CarOptions } from '../../components/car/CarOptions';
import { CarCard } from '../../components/car/CarCard.jsx';
import { useCar } from '../../hooks/useCars.jsx'; 

export const Dashboard = () => {

  const { cars, page, totalPages, totalCars, loading, handleNextPage, handlePrevPage } = useCar(); 
  const carsFilter = cars.filter((car) => car.name_state === 'Disponible');  
  if (loading) return <LoadingSpinner />; 

  return (
    <>
      <Navbar />
      <CarOptions totalCars={totalCars} />

      <Divider />

      <div className="container m-auto px-4 py-5">
        <Grid container spacing={4} className="mt-6">
          {carsFilter.length > 0 ? (
            carsFilter.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car.car_ID}>
                <CarCard car={car} />
              </Grid>
            ))
          ) : (
            <div className="w-full text-center mt-10 text-red-500">
              No hay carros registrados.
            </div>
          )}
        </Grid>

        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            variant="contained"
            color="error"
            startIcon={<ArrowBack />}
            className="px-5 py-3"
            aria-label="Anterior"
          >
            Anterior
          </Button>

          <Typography variant="body1" className="self-center text-lg font-semibold">
            Página {page} de {totalPages}
          </Typography>

          <Button
            onClick={handleNextPage}
            disabled={page === totalPages}
            color="error"
            variant="contained"
            aria-label="Siguiente"
            className="px-5 py-3"
            endIcon={<ArrowForward />}
          >
            Siguiente
          </Button>
        </div>
      </div>

      <Divider />
    </>
  );
};
