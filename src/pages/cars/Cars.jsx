import { useState } from 'react';
import { CarOptions } from '../../components/car/CarOptions';
import { Navbar } from '../../components/common/Navbar';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { CarCard } from '../../components/car/CarCard';
import { Button, Typography, Grid, Divider } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useCar } from '../../hooks/useCars';

export const Cars = () => {
  const { cars, page, totalPages, totalCars, loading, handleNextPage, handlePrevPage } = useCar(); 
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Navbar />
      <CarOptions totalCars={totalCars} adminMode={true} />
      <Divider />
      
      <div className="container m-auto px-4 py-5">
        <Grid container spacing={4} className="mt-6">
          {cars.length > 0 ? (
            cars.map((car) => (
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
          >
            Anterior
          </Button >

          <Typography variant="body1" className="self-center text-lg font-semibold">
            Página {page} de {totalPages}
          </Typography>

          <Button
            onClick={handleNextPage}
            disabled={page === totalPages}
            color="error"
            variant="contained"
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
