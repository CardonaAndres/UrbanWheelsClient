import { Navbar } from "../../../components/common/Navbar.jsx";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner.jsx";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Grid, Divider } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { UserModal } from "../../../components/user/admin/UserModal";
import { useForm } from "react-hook-form";
import { UserCard } from "../../../components/user/admin/UsersCard.jsx";
import { HeaderComponent } from "../../../components/user/admin/HeaderComponent.jsx";
import { useUserHook } from "../../../hooks/useUserHook";

export const UserManagement = () => {
  const navigate = useNavigate();
  const {
    users,
    page,
    totalPages,
    totalUsers,
    loading,
    openModal,
    selectedUser,
    handleNextPage,
    handlePrevPage,
    handleOpenModal,
    handleCloseModal,
    searchUserByEmail,
    handleRoleChange,
  } = useUserHook(navigate);

  const { register, handleSubmit } = useForm();

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Navbar />
      <HeaderComponent
        totalUsers={totalUsers}
        onSearch={handleSubmit(searchUserByEmail)}
        register={register}
        onRoleChange={handleRoleChange}
      />
      <Divider />
      <div className="container mx-auto px-4 py-5">
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} lg={4} key={user.email}>
              <UserCard user={user} onOpenModal={handleOpenModal} />
            </Grid>
          ))}
        </Grid>
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            variant="contained"
            color="error"
            startIcon={<ArrowBack />}
          >
            Anterior
          </Button>
          <Typography variant="body1">
            Página {page} de {totalPages}
          </Typography>
          <Button
            onClick={handleNextPage}
            disabled={page === totalPages}
            color="error"
            variant="contained"
            endIcon={<ArrowForward />}
          >
            Siguiente
          </Button>
        </div>
      </div>
      <UserModal open={openModal} onClose={handleCloseModal} selectedUser={selectedUser} />
    </>
  );
};
