import Swal from "sweetalert2";
import "../../assets/css/index.css";

export const successAlert = async (message) => {

    return Swal.fire({
        icon: 'success',
        title: '¡Todo Salio Bien!',
        text: message,
        color: '#2c2c2c',
        iconColor: '#81c784',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#4caf50',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'swal2-dark-alert',
        }
    });

}

export const errorAlert = (message) => {
 
    Swal.fire({
       
        icon: 'error',
        title: 'Ups ...',
        text: message,     
        color: '#2c2c2c',             
        iconColor: '#e57373',         
        confirmButtonText: 'Volver A Intentarlo',
        confirmButtonColor: 'red', 
        showClass: {
            popup: 'animate__animated animate__fadeInDown'  
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'   
        },
        customClass: {
            popup: 'swal2-dark-alert',   
        }

     });

}

export const confirmAlert = async (message) => {
    return Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: message,
        color: '#2c2c2c',
        iconColor: '#ffca28',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: '#ffca28',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'swal2-dark-alert',
        }
    });
};
